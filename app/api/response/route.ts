import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction:
      "You are a information helper for user. They want to know only about Metro Rail in bangladesh. Don't provide any other information. Response in Bangla if needed.",
  });

  const result = await model.generateContent(prompt);

  return NextResponse.json(result.response.text());
}
