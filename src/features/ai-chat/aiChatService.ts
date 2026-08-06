import { aiService, type AIChatMessage } from "../../services/aiService";

export type ChatMessage = AIChatMessage;

export const aiChatService = {
  async sendMessage(messages: ChatMessage[]) {
    return await aiService.sendMessage(messages);
  },
};
