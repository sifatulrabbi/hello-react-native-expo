import React, { createContext, useContext, useState } from "react";
import type { MessageUnsaved, Message } from "@/types";

type ChatbotProviderProps = {
  children: React.ReactNode;
};

type ChatbotContext = {
  messages: Message[];
  message: string;
  setMessage: (v: string) => void;
  fetchChatMessages: () => Promise<void>;
  postMessage: () => Promise<void>;
};

const chatbotContext = createContext<ChatbotContext>({
  messages: [],
  message: "",
  setMessage: () => {},
  fetchChatMessages: async () => {},
  postMessage: async () => {},
});

export const useChatbot = () => useContext(chatbotContext);

export function ChatbotProvider({ children }: ChatbotProviderProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  const fetchChatMessages = async () => {
    try {
      const response = await fetch("URL");
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      const data: Message[] = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  const postMessage = async () => {
    if (message.trim() === "") return;

    try {
      const newMessage: MessageUnsaved = {
        message: message,
        thread_id: "",
        actor_id: "",
      };

      // const savedMessage: Message = await response.json();
      // setMessages((prevMessages) => [...prevMessages, savedMessage]);
      setMessage("");
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  return (
    <chatbotContext.Provider
      value={{
        messages,
        message,
        setMessage,
        fetchChatMessages,
        postMessage,
      }}
    >
      {children}
    </chatbotContext.Provider>
  );
}

var _mockMessages = [];
