import { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { aiChatService, type ChatMessage } from "./aiChatService";

export default function AIChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    const newUserMsg: ChatMessage = { role: "user", content };
    const newMessages = [...messages, newUserMsg];

    setMessages(newMessages);
    setIsLoading(true);

    try {
      const responseContent = await aiChatService.sendMessage(newMessages);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: responseContent },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: "⚠️ Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-4xl mx-auto w-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm animate-fade-in">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-2xl">🤖</span> AI Travel Assistant
          </h1>
        </div>
      </div>

      <ChatWindow messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}
