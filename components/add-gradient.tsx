import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AddGradient({
  children,
  colors = ["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"],
}: {
  children: any;
  colors?: string[];
}) {
  return (
    <LinearGradient className="flex-1" colors={colors}>
      <SafeAreaView className="flex-1 m-5">{children}</SafeAreaView>
    </LinearGradient>
  );
}
