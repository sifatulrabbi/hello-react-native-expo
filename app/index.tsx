import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import meditationImages from "@/constants/meditation-images";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={meditationImages.beachImage}
        resizeMode="cover"
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView style={{ flex: 1, margin: 24 }}>
            <View style={{ flex: 1, rowGap: 8, paddingTop: 20 }}>
              <Text style={styles.heroTxt}>Hello React Native</Text>
              <Text style={styles.heroSubtitle}>
                Simplifying meditation for everyone
              </Text>
            </View>
            <View>
              <CustomButton
                label="Start"
                onPress={() => console.log("button pressed!")}
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
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
