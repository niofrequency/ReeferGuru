
import { GoogleGenAI, GenerateContentResponse, Chat, Content } from "@google/genai";
import { REEFER_GURU_SYSTEM_INSTRUCTION, MODEL_NAME } from '../constants';
import { Message } from '../types';

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getGenAI = (): GoogleGenAI => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing in environment variables.");
      throw new Error("API Key is missing. Please check your configuration.");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

// Convert internal Message format to Gemini SDK Content format
const mapMessagesToHistory = (messages: Message[]): Content[] => {
  return messages.map(msg => {
    const parts: any[] = [{ text: msg.text }];
    
    // If message has an image, we try to reconstruct the inlineData part
    // Note: This relies on the imageUrl being a base64 data URI
    if (msg.imageUrl && msg.imageUrl.startsWith('data:')) {
        const [meta, data] = msg.imageUrl.split(',');
        const mimeType = meta.split(':')[1].split(';')[0];
        parts.push({
            inlineData: {
                mimeType,
                data
            }
        });
    }

    return {
      role: msg.role,
      parts: parts
    };
  });
};

export const initializeChat = async (historyMessages: Message[] = []) => {
  try {
    const ai = getGenAI();
    
    // Filter out error messages or system initialization messages that shouldn't be in history context
    let validHistory = historyMessages.filter(m => !m.isError && m.id !== 'init-1');

    // FIX: Gemini API requires strict alternation of User -> Model roles.
    // If the last message in history is from the 'user' (which happens if the last request failed/errored),
    // the API will reject the next 'user' message as an invalid turn (User -> User).
    // We must remove the dangling user message from the history context to restore balance.
    if (validHistory.length > 0 && validHistory[validHistory.length - 1].role === 'user') {
        validHistory = validHistory.slice(0, -1);
    }

    const formattedHistory = mapMessagesToHistory(validHistory);

    chatSession = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: REEFER_GURU_SYSTEM_INSTRUCTION,
        temperature: 0.4,
      },
      history: formattedHistory
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return false;
  }
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Wrapper to handle Rate Limits (429) and Server Overload (503)
const sendMessageWithRetry = async (
  session: Chat, 
  payload: any, 
  retries = 3, 
  attempt = 1
): Promise<GenerateContentResponse> => {
  try {
    return await session.sendMessage(payload);
  } catch (error: any) {
    // Check for common temporary failure codes
    const msg = error.message || '';
    const status = error.status || error.response?.status;

    // 429: Too Many Requests (Quota Exceeded)
    // 503: Service Unavailable (Overloaded)
    const isRetryable = 
        msg.includes('429') || status === 429 || 
        msg.includes('503') || status === 503 ||
        msg.includes('Quota exceeded') ||
        msg.includes('Resource has been exhausted');

    if (isRetryable && attempt <= retries) {
      // Exponential backoff: 2s, 4s, 8s
      const delay = Math.pow(2, attempt) * 1000; 
      console.warn(`Gemini API Busy (Attempt ${attempt}/${retries}). Retrying in ${delay}ms...`);
      
      await sleep(delay);
      return sendMessageWithRetry(session, payload, retries, attempt + 1);
    }
    
    throw error;
  }
};

export const sendMessageToGemini = async (
  text: string, 
  imageBase64?: string, 
  mimeType?: string
): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    throw new Error("Chat session could not be initialized.");
  }

  try {
    let payload;

    if (imageBase64 && mimeType) {
      payload = {
            message: {
                role: 'user',
                parts: [
                    { text: text },
                    {
                        inlineData: {
                            data: imageBase64,
                            mimeType: mimeType
                        }
                    }
                ]
            }
        };
    } else {
      payload = { message: text };
    }

    const result = await sendMessageWithRetry(chatSession, payload);
    return result.text || "No response received from the manual database.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
