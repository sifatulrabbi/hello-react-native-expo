import { StatusBar } from "expo-status-bar";
import AddGradient from "@/components/add-gradient";
import { View, Text } from "react-native";

export default function NatureMediate() {
  return (
    <AddGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <StatusBar style="light" />
      <View>
        <Text>Welcome</Text>
      </View>
    </AddGradient>
  );
}
