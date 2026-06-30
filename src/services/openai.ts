import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const openai = new OpenAI({
  apiKey: apiKey || "",
  // Required to be set to true for client-side API calls
  dangerouslyAllowBrowser: true, 
});