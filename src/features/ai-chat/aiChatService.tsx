export type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

/**
 * Simulates sending messages to an AI chat service and receiving a response.
 * In a real application, this function would make an API call to a service like OpenAI,
 * Google Gemini, or another AI provider.
 * @param messages The history of messages in the current chat session.
 * @returns A promise that resolves to the AI's response content.
 */
const sendMessage = async (messages: ChatMessage[]): Promise<string> => {
  console.log('Sending messages to AI service:', messages);
  const lastUserMessage = messages[messages.length - 1]?.content.toLowerCase();

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (lastUserMessage?.includes('paris')) {
    return 'Paris is a wonderful choice! I can help you find flights, hotels, and must-see attractions like the Eiffel Tower and the Louvre Museum. What dates are you thinking of traveling?';
  }

  return 'This is a simulated response from your AI Travel Assistant. In a real application, I would connect to an AI service to provide helpful travel information. Where would you like to go?';
};

export const aiChatService = {
  sendMessage,
};
