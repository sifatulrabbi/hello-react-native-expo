import React, { createContext, useContext, useState } from "react";
import type { MessageUnsaved, Message } from "@/types";

type ChatbotProviderProps = {
  children: React.ReactNode;
};

type ChatbotContext = {
  messages: Message[];
  fetchChatMessages: () => Promise<void>;
  postMessage: (msg: string) => Promise<void>;
};

const chatbotContext = createContext<ChatbotContext>({
  messages: [],
  fetchChatMessages: async () => {},
  postMessage: async () => {},
});

export const useChatbot = () => useContext(chatbotContext);

export function ChatbotProvider({ children }: ChatbotProviderProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchChatMessages = async () => {
    try {
      // await new Promise((r) => setTimeout(r, 2000));
      // const response = await fetch("URL");
      // if (!response.ok) {
      //   throw new Error("Failed to fetch messages");
      // }
      // const data: Message[] = await response.json();
      setMessages(_mock_messages);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  const postMessage = async (msg: string) => {
    if (msg.trim() === "") return;

    try {
      await new Promise((r) => setTimeout(r, 2000));
      const newMessage: MessageUnsaved = {
        actor_id: "user_123",
        message: msg,
        thread_id: "thread_1",
      };
      const savedMessage: Message = {
        ...newMessage,
        id: (messages.length + 1).toString(),
        actor_type: "USER",
        message_type: "TEXT",
        timestamp: new Date().toISOString().replace("T", " ").replace("Z", ""),
      };
      setMessages((prevMessages) => [...prevMessages, savedMessage]);
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  return (
    <chatbotContext.Provider
      value={{
        messages,
        fetchChatMessages,
        postMessage,
      }}
    >
      {children}
    </chatbotContext.Provider>
  );
}

var _mock_messages: Message[] = [
  {
    id: "1",
    actor_id: "user_123",
    actor_type: "USER",
    message:
      "Hey there! I was wondering if you could help me with an issue I'm having with my order.",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:00:00",
  },
  {
    id: "2",
    actor_id: "bot_001",
    actor_type: "ASSISTANT",
    message:
      "Of course! I'd be happy to help. Could you please provide your order number?",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:01:30",
  },
  {
    id: "3",
    actor_id: "user_123",
    actor_type: "USER",
    message:
      "Sure, the order number is 987654. I'm trying to track its status, but the system isn't updating.",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:02:45",
  },
  {
    id: "4",
    actor_id: "bot_001",
    actor_type: "ASSISTANT",
    message:
      "Thanks for the information! I'll check the status of your order now. Please give me a moment.",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:03:15",
  },
  {
    id: "5",
    actor_id: "user_123",
    actor_type: "USER",
    message:
      "No problem, take your time. This issue has been happening for a couple of days now.",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:04:30",
  },
  {
    id: "6",
    actor_id: "bot_001",
    actor_type: "ASSISTANT",
    message:
      "I see. It looks like there was a slight delay in processing your order, but it has been shipped and should arrive soon.",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:06:00",
  },
  {
    id: "7",
    actor_id: "user_123",
    actor_type: "USER",
    message:
      "Oh, that's a relief! Do you have a tracking number I can use to monitor the delivery?",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:07:15",
  },
  {
    id: "80",
    actor_id: "bot_001",
    actor_type: "SYSTEM",
    message: "Searching for the tracking number",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:08:30",
  },
  {
    id: "8",
    actor_id: "bot_001",
    actor_type: "ASSISTANT",
    message:
      "Yes, here is your tracking number: TRK123456789. You can use it to track your package on our delivery partner's website.",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:08:30",
  },
  {
    id: "9",
    actor_id: "user_123",
    actor_type: "USER",
    message: "Thanks a lot for your help!",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:09:45",
  },
  {
    id: "10",
    actor_id: "bot_001",
    actor_type: "ASSISTANT",
    message:
      "You're welcome! I'm glad I could assist. If you have any more questions, feel free to ask.",
    message_type: "TEXT",
    thread_id: "thread_1",
    timestamp: "2024-09-22 12:10:30",
  },
];
