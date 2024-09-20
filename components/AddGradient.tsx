import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AddGradient({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) {
  return (
    <LinearGradient style={{ flex: 1 }} colors={colors}>
      <SafeAreaView style={{ flex: 1, margin: 24 }}>{children}</SafeAreaView>
    </LinearGradient>
  );
}
