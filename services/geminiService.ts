import OpenAI from 'openai';
import { REEFER_GURU_SYSTEM_INSTRUCTION, MODEL_NAME } from '../constants';
import { Message } from '../types';

// Grok (xAI) is "stateless" (REST API), unlike the Gemini SDK which manages sessions.
// We must maintain the conversation history locally in this file.
let conversationHistory: any[] = [];
let xaiClient: OpenAI | null = null;

const getClient = (): OpenAI => {
  if (!xaiClient) {
    // Supports both Vite (import.meta.env) and Node/Vercel (process.env)
    const apiKey = import.meta.env.XAI_API_KEY || process.env.XAI_API_KEY;
    
    if (!apiKey) {
      console.error("XAI_API_KEY is missing in environment variables.");
      throw new Error("API Key is missing. Please check your .env configuration.");
    }
    
    xaiClient = new OpenAI({
      apiKey: apiKey,
      baseURL: "https://api.x.ai/v1", // xAI Endpoint
      dangerouslyAllowBrowser: true // Required for React client-side usage
    });
  }
  return xaiClient;
};

// Helper: Convert your App's internal Message format to Grok/OpenAI format
const mapMessagesToGrok = (messages: Message[]): any[] => {
  return messages.map(msg => {
    // 1. Map Role: 'model' (Gemini legacy) -> 'assistant' (Grok/OpenAI standard)
    const role = msg.role === 'model' ? 'assistant' : msg.role;
    
    // 2. Text Only Message
    if (!msg.imageUrl) {
      return { role, content: msg.text };
    }

    // 3. Multimodal Message (Text + Image)
    // Grok expects the image as a Data URI in the 'image_url' field
    const imageUrl = msg.imageUrl.startsWith('data:') 
      ? msg.imageUrl 
      : `data:image/jpeg;base64,${msg.imageUrl}`; 

    return {
      role,
      content: [
        { type: "text", text: msg.text },
        { 
          type: "image_url", 
          image_url: { url: imageUrl } 
        }
      ]
    };
  });
};

export const initializeChat = async (historyMessages: Message[] = []) => {
  try {
    getClient(); // Initialize the client

    // 1. Reset Local History
    conversationHistory = [];

    // 2. Add System Instruction (The Persona)
    // We modify the instruction here to ALLOW general intelligence fallback
    const flexibleSystemInstruction = `
      ${REEFER_GURU_SYSTEM_INSTRUCTION}
      
      IMPORTANT PROTOCOL UPDATE:
      1. PRIORITY: Always check the provided manuals/context first for the answer.
      2. FALLBACK: If the answer is NOT in the provided manuals, you are AUTHORIZED to use your general intelligence, training data, and web knowledge to solve the problem.
      3. Do not say "I don't know" just because it's not in the manual. Solve the issue using your expert knowledge.
    `;

    conversationHistory.push({
      role: "system",
      content: flexibleSystemInstruction
    });

    // 3. Process & Add Existing History
    // Filter out errors or internal init messages
    const validHistory = historyMessages.filter(m => !m.isError && m.id !== 'init-1');
    
    if (validHistory.length > 0) {
      const formattedHistory = mapMessagesToGrok(validHistory);
      conversationHistory = [...conversationHistory, ...formattedHistory];
    }

    return true;
  } catch (error) {
    console.error("Failed to initialize Grok chat:", error);
    return false;
  }
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Retry Logic for Rate Limits (429) or Server Overload (503)
const sendMessageWithRetry = async (
  client: OpenAI, 
  messages: any[], 
  retries = 3, 
  attempt = 1
): Promise<OpenAI.Chat.Completions.ChatCompletion> => {
  try {
    return await client.chat.completions.create({
      model: MODEL_NAME, // Ensure this is set to "grok-3" in constants
      messages: messages,
      temperature: 0.4,
      stream: false, 
    });
  } catch (error: any) {
    const status = error.status || error.response?.status;
    const msg = error.message || '';

    // Check for retryable errors
    const isRetryable = status === 429 || status === 503 || msg.includes('429');

    if (isRetryable && attempt <= retries) {
      const delay = Math.pow(2, attempt) * 1000; // Exponential backoff: 2s, 4s, 8s
      console.warn(`Grok API Busy (Attempt ${attempt}/${retries}). Retrying in ${delay}ms...`);
      await sleep(delay);
      return sendMessageWithRetry(client, messages, retries, attempt + 1);
    }
    
    throw error;
  }
};

// We keep the name "sendMessageToGemini" so you don't have to refactor App.tsx
// but internally it is now powered by Grok.
export const sendMessageToGemini = async (
  text: string, 
  imageBase64?: string, 
  mimeType?: string
): Promise<string> => {
  const client = getClient();

  // 1. Prepare the New User Message
  let newMessage: any;

  if (imageBase64) {
    // Ensure data URI format
    const imageUrl = imageBase64.startsWith('data:') 
      ? imageBase64 
      : `data:${mimeType || 'image/jpeg'};base64,${imageBase64}`;

    newMessage = {
      role: 'user',
      content: [
        { type: "text", text: text },
        { type: "image_url", image_url: { url: imageUrl } }
      ]
    };
  } else {
    newMessage = { 
      role: 'user', 
      content: text 
    };
  }

  // 2. Build the Payload
  // We combine the history + the new message to send to the stateless API
  const messagesPayload = [...conversationHistory, newMessage];

  try {
    // 3. Send to Grok
    const response = await sendMessageWithRetry(client, messagesPayload);
    
    const replyText = response.choices[0]?.message?.content || "No response received.";

    // 4. Update History (Only if request was successful)
    conversationHistory.push(newMessage);
    conversationHistory.push({
      role: 'assistant',
      content: replyText
    });

    return replyText;
    
  } catch (error) {
    console.error("Grok API Error:", error);
    throw error;
  }
};
