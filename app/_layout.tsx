import { ChatbotProvider } from "@/contexts/chatbot-context";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <ChatbotProvider>
      <Slot />
    </ChatbotProvider>
  );
}
