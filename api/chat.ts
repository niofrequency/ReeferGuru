// api/chat.ts
import OpenAI from 'openai';

// Define your models
const TEXT_MODEL = "grok-3"; // High intelligence, text-only
const VISION_MODEL = "grok-4-1-fast-reasoning"; // Vision-capable, cost-effective

// Vercel Node.js Handler
export default async function handler(req: any, res: any) {
  
  // 1. Handle CORS (Allow requests from your frontend)
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
    const { messages } = req.body || {};

    if (!messages) {
      return res.status(400).json({ error: 'No messages provided in request body.' });
    }

    // 4. INTELLIGENT MODEL SWITCHING
    // Scan history to see if any message contains an image
    const hasImage = messages.some((msg: any) => 
      Array.isArray(msg.content) && 
      msg.content.some((part: any) => part.type === "image_url")
    );

    // Swap models based on content
    const selectedModel = hasImage ? VISION_MODEL : TEXT_MODEL;
    
    // Optional: Log which model is being used (visible in Vercel logs)
    console.log(`Request Analysis: Image Detected = ${hasImage}. Switching to ${selectedModel}.`);

    // 5. Initialize OpenAI securely
    const apiKey = process.env.XAI_API_KEY;

    if (!apiKey) {
      console.error("Server configuration error: XAI_API_KEY is missing.");
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: "https://api.x.ai/v1",
    });

    // 6. Call Grok (using the selected model)
    const completion = await openai.chat.completions.create({
      model: selectedModel,
      messages: messages,
      temperature: 0.4,
    });

    // 7. Return the response
    const reply = completion.choices[0]?.message?.content || "No response.";
    
    return res.status(200).json({ reply });

  } catch (error: any) {
    console.error("API Error:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
