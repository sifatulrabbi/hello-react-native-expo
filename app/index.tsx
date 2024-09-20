import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import meditationImages from "@/constants/meditation-images";
import { useRouter } from "expo-router";
import AddGradient from "@/components/AddGradient";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={meditationImages.beachImage}
        resizeMode="cover"
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <AddGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
          <View style={{ flex: 1, rowGap: 8, paddingTop: 20 }}>
            <Text style={styles.heroTxt}>Hello React Native</Text>
            <Text style={styles.heroSubtitle}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTxt: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 2 * 16,
  },
  heroSubtitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "medium",
    fontSize: 20,
  },
});
