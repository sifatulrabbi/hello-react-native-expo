import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router/build/hooks";

export default function ChatbotPage() {
  const router = useRouter();

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
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text className="text-xl font-bold leading-none ml-4">Chatbot</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} className="pl-4">
            <Entypo name="dots-three-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1"></ScrollView>

        <KeyboardAvoidingView className="w-full flex-row items-end bg-white gap-x-2 p-4">
          <TouchableOpacity
            activeOpacity={0.8}
            className="px-3 py-3 rounded-full bg-gray-200"
          >
            <AntDesign name="plus" size={20} color="gray" />
          </TouchableOpacity>
          <TextInput
            className="px-4 py-2 text-base font-medium max-h-60 bg-gray-200 rounded-3xl flex-1"
            placeholder="Type your message here..."
            multiline
          />
          <TouchableOpacity
            activeOpacity={0.8}
            className="px-4 py-3 rounded-full bg-blue-500"
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
