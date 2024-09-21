import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/custom-button";
import meditationImages from "@/constants/meditation-images";
import AddGradient from "@/components/add-gradient";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar style="light" />
      <ImageBackground
        source={meditationImages.beachImage}
        resizeMode="cover"
        className="flex-1 w-full h-full"
      >
        <AddGradient>
          <View className="flex-1 gap-y-2 pt-5">
            <Text className="text-3xl font-bold text-white text-center w-full">
              Hello React Native
            </Text>
            <Text className="text-white text-center w-full text-lg">
              Simplifying meditation for everyone
            </Text>
          </View>
          <View>
            <CustomButton
              label="Start"
              onPress={() => router.push("/nature-meditate")}
            />
          </View>
        </AddGradient>
      </ImageBackground>
    </View>
  );
}
