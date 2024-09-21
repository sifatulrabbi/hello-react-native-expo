import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/custom-button";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView className="flex-1 justify-center items-center bg-blue-600 pt-8">
        <View className="w-full flex-1 gap-y-4 p-4 h-full items-center justify-center">
          <Text className="text-3xl font-bold text-white text-center w-full">
            Simple ChatApp
          </Text>
          <Text className="text-white text-center w-full text-lg">
            First time building a chat app using React native and Expo
          </Text>
          <CustomButton
            label="Start Chat"
            onPress={() => router.push("/chatbot")}
            containerStyles="mt-14"
          />
        </View>
      </SafeAreaView>
    </>
  );
}
