import { generatePrompt } from "@/app/utils/portfolioData";
import { sanitizeResponse } from "@/app/utils/sanitizeResponse";
import { NextResponse } from "next/server";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

/**
 * Fetches the AI-generated response from the Groq API.
 * @param {string} prompt - The prompt to send to the API.
 * @returns {Promise<string>} - The AI-generated response.
 */
async function fetchAIResponse(prompt) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // or "llama2-70b-4096" for higher quality
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 150,
        top_p: 0.8,
        stream: false, // Set to true if you want to implement streaming
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API Error: ${response.status} - ${response.statusText} - ${errorText}`
      );
    }

    const result = await response.json();

    if (!result.choices?.[0]?.message?.content) {
      throw new Error("Invalid response format from AI.");
    }

    return result.choices[0].message.content;
  } catch (error) {
    console.error("Groq API Error:", error);
    throw error;
  }
}

export async function POST(req) {
  try {
    const { message } = await req.json();
    let lastMessage;

    if (Array.isArray(message)) {
      lastMessage = message[message.length - 1]?.content;
    } else if (typeof message === "string") {
      lastMessage = message;
    } else {
      throw new Error("Invalid message format");
    }

    const prompt = generatePrompt(lastMessage);
    const aiResponse = await fetchAIResponse(prompt);
    const sanitizedResponse = sanitizeResponse(aiResponse);

    return NextResponse.json({ response: sanitizedResponse });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        response:
          "I'm currently having trouble accessing the information. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
