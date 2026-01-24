// api/chat.ts
import { OpenAI } from 'openai';

// Vercel Serverless Function
export default async function handler(request: Request) {
  // 1. Handle CORS (Optional, but good for local dev if needed)
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    // 2. Parse the incoming message history from the frontend
    const { messages } = await request.json();

    // 3. Initialize OpenAI securely (Key is HIDDEN on the server)
    // Note: We use process.env.XAI_API_KEY (Server-side), not VITE_...
    const apiKey = process.env.XAI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Server configuration error: Missing API Key' }), { status: 500 });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: "https://api.x.ai/v1",
    });

    // 4. Call Grok
    const completion = await openai.chat.completions.create({
      model: "grok-3", // Ensure this matches your desired model
      messages: messages,
      temperature: 0.4,
    });

    // 5. Return the response to the frontend
    const reply = completion.choices[0]?.message?.content || "No response.";
    
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
}
