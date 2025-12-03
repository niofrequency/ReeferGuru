import { GoogleGenAI } from "@google/genai";
import { REEFER_GURU_SYSTEM_INSTRUCTION, MODEL_NAME } from '../constants';

// Environment variables
const GOOGLE_API_KEY = process.env.API_KEY;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN || 'reeferguru_verify';

export default async function handler(req: any, res: any) {
  // 1. WhatsApp Verification Challenge (GET)
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }
    return res.status(403).json({ error: 'Verification failed' });
  }

  // 2. Handle Incoming Messages (POST)
  if (req.method === 'POST') {
    try {
      const value = req.body?.entry?.[0]?.changes?.[0]?.value;
      const message = value?.messages?.[0];

      // Ignore status updates or non-text messages
      if (!message || message.type !== 'text') {
        return res.status(200).json({ status: 'ignored' });
      }

      const from = message.from; // User's phone number
      const text = message.text.body;
      const businessPhoneNumberId = value?.metadata?.phone_number_id;

      if (!GOOGLE_API_KEY || !WHATSAPP_TOKEN) {
        console.error("Missing API Keys");
        return res.status(500).json({ error: 'Server Configuration Error' });
      }

      // 3. Query Gemini AI
      const ai = new GoogleGenAI({ apiKey: GOOGLE_API_KEY });
      
      const response = await ai.models.generateContent({
        model: MODEL_NAME,
        contents: text,
        config: {
            systemInstruction: REEFER_GURU_SYSTEM_INSTRUCTION,
            // Keep WhatsApp responses concise
            maxOutputTokens: 400, 
        }
      });
      
      const replyText = response.text || "I couldn't generate a response. Please try again.";

      // 4. Send Reply via WhatsApp Graph API
      const graphUrl = `https://graph.facebook.com/v18.0/${businessPhoneNumberId}/messages`;
      
      const whatsappResponse = await fetch(graphUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: from,
          text: { body: replyText },
        }),
      });

      if (!whatsappResponse.ok) {
        const errorData = await whatsappResponse.json();
        console.error("WhatsApp API Error:", errorData);
        return res.status(500).json({ error: 'Failed to send WhatsApp message' });
      }

      return res.status(200).json({ status: 'replied' });

    } catch (error) {
      console.error('Error processing webhook:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}