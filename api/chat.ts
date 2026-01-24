// api/chat.ts
import OpenAI from 'openai';

// Vercel Node.js Handler
export default async function handler(req: any, res: any) {
  
  // 1. Handle CORS (Allow requests from your frontend)
  // This is helpful if you run the frontend and backend on different ports locally
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 3. Get messages from the body
    // Vercel automatically parses JSON body into req.body
    const { messages } = req.body || {};

    if (!messages) {
      return res.status(400).json({ error: 'No messages provided in request body.' });
    }

    // 4. Initialize OpenAI securely using the Server-side Key
    // Ensure "XAI_API_KEY" is set in your Vercel Environment Variables
    const apiKey = process.env.XAI_API_KEY;

    if (!apiKey) {
      console.error("Server configuration error: XAI_API_KEY is missing.");
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: "https://api.x.ai/v1",
    });

    // 5. Call Grok
    const completion = await openai.chat.completions.create({
      model: "grok-3",
      messages: messages,
      temperature: 0.4,
    });

    // 6. Return the response to the frontend
    const reply = completion.choices[0]?.message?.content || "No response.";
    
    return res.status(200).json({ reply });

  } catch (error: any) {
    console.error("API Error:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
