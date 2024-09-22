import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import CustomTextarea from "@/components/custom-textarea";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "expo-router/build/hooks";
import { useChatbot } from "@/contexts/chatbot-context";
import { USER_TYPE } from "@/constants/user-types";
import { Colors } from "@/constants/Colors";

export default function ChatbotPage() {
  const [gettingMessages, setGettingMessages] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { messages, fetchChatMessages, postMessage } = useChatbot();
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    setLoading(true);
    setGettingMessages(true);
    fetchChatMessages().finally(() => {
      setLoading(false);
      setGettingMessages(false);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => scrollToBottom(), 500);
    return () => clearTimeout(timeout);
  }, [messages.length]);

  async function onSubmit(msg: string) {
    scrollToBottom();
    setLoading(true);
    await postMessage(msg);
    setLoading(false);
  }

  function scrollToBottom() {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 mt-4">
        <View className="p-4 pt-5 w-full flex-row items-center justify-between bg-white">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <AntDesign name="arrowleft" size={24} color="#2563eb" />
            <Text className="text-xl font-bold leading-none ml-4">Chatbot</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} className="pl-4">
            <Entypo name="dots-three-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {!gettingMessages && (
          <ScrollView
            ref={scrollViewRef}
            className="flex-1 px-4 flex-col gap-y-4 w-full"
          >
            {messages.map((msg) => (
              <View
                key={msg.id + msg.thread_id + msg.actor_id + msg.timestamp}
                className={`w-full flex-row
                ${msg.actor_type === USER_TYPE.USER ? "justify-end" : ""}
                ${msg.actor_type === USER_TYPE.ASSISTANT ? "justify-start" : ""}
                ${msg.actor_type === USER_TYPE.SYSTEM ? "justify-center items-center" : ""}`}
              >
                {msg.actor_type === USER_TYPE.ASSISTANT && (
                  <View className="w-[32px] h-[32px] rounded-full border border-gray-300 justify-center items-center opacity-40 mr-2">
                    <Ionicons
                      name="sparkles-sharp"
                      size={16}
                      color={Colors.lightPurple}
                    />
                  </View>
                )}
                <View
                  className={`p-4 rounded-xl
                  ${msg.actor_type === USER_TYPE.USER ? "max-w-[80%] bg-white border border-gray-200 text-white" : ""}
                  ${msg.actor_type === USER_TYPE.ASSISTANT ? "max-w-[80%] bg-primaryLight/60 border-dashed text-black" : ""}
                  ${msg.actor_type === USER_TYPE.SYSTEM ? "max-w-full bg-white self-center mx-auto" : ""}`}
                >
                  <Text
                    className={`text-base
                    ${msg.actor_type === USER_TYPE.USER ? "text-black" : ""}
                    ${msg.actor_type === USER_TYPE.ASSISTANT ? "text-black" : ""}
                    ${msg.actor_type === USER_TYPE.SYSTEM ? "text-sm italic text-gray-700" : ""}`}
                  >
                    {msg.message}
                  </Text>
                </View>
                {msg.actor_type === USER_TYPE.USER && (
                  <View className="w-[32px] h-[32px] rounded-full border border-gray-300 justify-center items-center opacity-40 ml-2">
                    <MaterialIcons
                      name="person"
                      size={16}
                      color={Colors.lightPurple}
                    />
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        )}
        {gettingMessages && (
          <View className="flex-1 bg-white justify-center items-center">
            <Text className="text-base animate-pulse">Getting messages...</Text>
          </View>
        )}

        <CustomTextarea onSubmit={onSubmit} disabled={loading} />
      </SafeAreaView>
    </>
  );
}
