import AddGradient from "@/components/AddGradient";
import { View, Text } from "react-native";

export default function NatureMediate() {
  return (
    <AddGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
      <View>
        <Text>NatureMediate</Text>
      </View>
    </AddGradient>
  );
}
