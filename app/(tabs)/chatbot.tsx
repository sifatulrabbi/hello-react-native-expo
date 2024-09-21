import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router/build/hooks";
import CustomTextarea from "@/components/custom-textarea";
import { useState } from "react";

export default function ChatbotPage() {
  const [msg, setMsg] = useState("");
  const router = useRouter();

  async function onSubmit() {
    console.log(msg);
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

        <ScrollView className="flex-1"></ScrollView>

        <CustomTextarea value={msg} onChangeText={setMsg} onSubmit={onSubmit} />
      </SafeAreaView>
    </>
  );
}
