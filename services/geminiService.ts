import { GoogleGenAI, GenerateContentResponse, ChatSession, Content } from "@google/genai";
import { REEFER_GURU_SYSTEM_INSTRUCTION, MODEL_NAME } from '../constants';
import { Message } from '../types';

let chatSession: ChatSession | null = null;
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
    const validHistory = historyMessages.filter(m => !m.isError && m.id !== 'init-1');
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
    let result: GenerateContentResponse;

    if (imageBase64 && mimeType) {
        result = await chatSession.sendMessage({
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
        });

    } else {
      result = await chatSession.sendMessage({ message: text });
    }

    return result.text || "No response received from the manual database.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};