import { useState } from 'react';
import { openai } from '../services/openai';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content })),
      });

      const aiContent = response.choices[0]?.message?.content;
      if (aiContent) {
        setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: aiContent }]);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading, setMessages };
};