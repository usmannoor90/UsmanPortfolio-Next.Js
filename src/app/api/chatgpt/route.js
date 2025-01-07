// import { NextResponse } from "next/server";

// import OpenAI from "openai";
// const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

// export async function POST(request) {
//   const { prompt } = await request.json();

//   console.log("in the route");

//   const completion = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       { role: "system", content: "You are a helpful assistant." },
//       {
//         role: "user",
//         content: "Write a haiku about recursion in programming.",
//       },
//     ],
//   });

//   console.log(completion.choices[0].message);

//   return NextResponse.json(completion);
// }

import { portfolioData } from "@/app/utils/portfolioData";
import { sanitizeResponse } from "@/app/utils/sanitizeResponse";
import { NextResponse } from "next/server";

const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY;
const API_URL =
  "https://api-inference.huggingface.co/models/google/flan-t5-large";

/**
 * Generates a context-aware prompt for the AI.
 * @param {string} question - The user's question.
 * @returns {string} - The generated prompt.
 */
function generatePrompt(question) {
  return `
  You are an advanced AI assistant designed to answer questions about a professional portfolio. Below is the portfolio information:

  Portfolio Data:
  ${JSON.stringify(portfolioData, null, 2)}

  Your task:
  - Answer questions about the portfolio using the provided data.
  - If the question is about "experience," list the company, position, duration, and description fields.
  - If the requested information is missing, respond: "I don't have access to that information."
  - Avoid assumptions or fabricating details.

  Question: "${question}"

  Response:
  `;
}

/**
 * Fetches the AI-generated response from the Hugging Face API.
 * @param {string} prompt - The prompt to send to the API.
 * @returns {Promise<string>} - The AI-generated response.
 */

async function fetchAIResponse(prompt) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: prompt,
      parameters: {
        max_length: 150,
        temperature: 1,
        top_p: 0.9,
        top_k: 50,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `API Error: ${response.status} - ${response.statusText} - ${response}`
    );
  }

  const result = await response.json();
  if (!result[0]?.generated_text) {
    throw new Error("Invalid response format from AI.");
  }

  return result[0].generated_text;
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

    // Generate a prompt using the last message
    const prompt = generatePrompt(lastMessage);

    // Fetch AI response
    const aiResponse = await fetchAIResponse(prompt);

    console.log(aiResponse);

    // Sanitize and return the AI's response
    const sanitizedResponse = sanitizeResponse(aiResponse);
    return NextResponse.json({ response: sanitizedResponse });
  } catch (error) {
    console.log(error);

    // Return a user-friendly error message
    return NextResponse.json({
      response:
        "I'm currently having trouble accessing the information. Please try asking your question again in a moment.",
    });
  }
}
