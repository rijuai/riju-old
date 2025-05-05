import { GEMINI_API_KEY } from "$env/static/private"
import { GoogleGenAI } from "@google/genai"

export const gemini = new GoogleGenAI({ apiKey: GEMINI_API_KEY })