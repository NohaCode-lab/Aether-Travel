import { openai } from "../../services/openai";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export const aiChatService = {
  async sendMessage(messages: ChatMessage[]) {
    const systemPrompt: ChatMessage = {
      role: "system",
      content:
        "You are an expert, friendly AI travel assistant. Help the user plan trips, give destination advice, packing tips, and local cultural insights. Keep your answers concise, well-formatted, and helpful.",
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [systemPrompt, ...messages],
    });

    const responseContent = response.choices[0].message.content;
    if (!responseContent) throw new Error("No response from AI");
    return responseContent;
  },
};
