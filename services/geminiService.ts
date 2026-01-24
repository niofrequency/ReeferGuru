import { REEFER_GURU_SYSTEM_INSTRUCTION } from '../constants';
import { Message } from '../types';

// We maintain the conversation history locally to keep the UI snappy
let conversationHistory: any[] = [];

// Helper: Convert internal App Message format to Grok/OpenAI format
const mapMessagesToGrok = (messages: Message[]): any[] => {
  return messages.map(msg => {
    const role = msg.role === 'model' ? 'assistant' : msg.role;
    
    // Text Only
    if (!msg.imageUrl) {
      return { role, content: msg.text };
    }

    // Multimodal (Text + Image)
    // Ensure the image is formatted correctly for the backend
    const imageUrl = msg.imageUrl.startsWith('data:') 
      ? msg.imageUrl 
      : `data:image/jpeg;base64,${msg.imageUrl}`; 

    return {
      role,
      content: [
        { type: "text", text: msg.text },
        { type: "image_url", image_url: { url: imageUrl } }
      ]
    };
  });
};

export const initializeChat = async (historyMessages: Message[] = []) => {
  // 1. Reset Local History
  conversationHistory = [];

  // 2. Set the System Persona
  // We explicitly reinforce the rules here to ensure the AI behaves correctly
  const flexibleSystemInstruction = `
    ${REEFER_GURU_SYSTEM_INSTRUCTION}
    
    IMPORTANT PROTOCOL UPDATE:
    1. PRIORITY: Always check the provided manuals/context first.
    2. FALLBACK: If the answer is NOT in the manuals, you are AUTHORIZED to use general intelligence/web knowledge.
    3. TONE: Be concise, professional, and technical.
    4. RESTRICTION: DO NOT introduce yourself ("I am Reefer Guru...") in every response. Only introduce yourself if explicitly asked.
  `;

  conversationHistory.push({
    role: "system",
    content: flexibleSystemInstruction
  });

  // 3. Process & Add Existing History
  const validHistory = historyMessages.filter(m => !m.isError && m.id !== 'init-1');
  if (validHistory.length > 0) {
    const formattedHistory = mapMessagesToGrok(validHistory);
    conversationHistory = [...conversationHistory, ...formattedHistory];
  }

  return true;
};

// Main function called by UI
export const sendMessageToGemini = async (
  text: string, 
  imageBase64?: string, 
  mimeType?: string
): Promise<string> => {

  // 1. Prepare New User Message
  let newMessage: any;

  if (imageBase64) {
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
    newMessage = { role: 'user', content: text };
  }

  // 2. Combine History + New Message
  const messagesPayload = [...conversationHistory, newMessage];

  try {
    // 3. Call the Backend API (api/chat.ts)
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: messagesPayload }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Server Error: ${response.status}`);
    }

    const data = await response.json();
    const replyText = data.reply;

    // 4. Update Local History on Success
    conversationHistory.push(newMessage);
    conversationHistory.push({
      role: 'assistant',
      content: replyText
    });

    return replyText;

  } catch (error) {
    console.error("Chat API Error:", error);
    throw error;
  }
};
