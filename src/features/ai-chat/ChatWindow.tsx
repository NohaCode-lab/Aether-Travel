import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ChatMessage } from "./aiChatService";

interface ChatWindowProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export default function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 dir-ltr text-left">
      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
          <span className="text-6xl">👋</span>
          <p className="text-lg">
            How can I help you with your travel plans today?
          </p>
        </div>
      )}

      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 shadow-sm ${msg.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-tl-none text-gray-800 dark:text-gray-200"}`}
          >
            {msg.role === "user" ? (
              <p className="whitespace-pre-wrap">{msg.content}</p>
            ) : (
              <div className="prose dark:prose-invert prose-blue max-w-none prose-sm md:prose-base">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="flex justify-start animate-pulse">
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-none px-5 py-4 flex gap-1.5 shadow-sm">
            <span className="w-2.5 h-2.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></span>
            <span
              className="w-2.5 h-2.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="w-2.5 h-2.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
}
