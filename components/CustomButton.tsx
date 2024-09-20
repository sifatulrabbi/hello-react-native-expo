import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

type CustomButtonProps = {
  label: string;
  containerStyles?: Record<string, any>;
  textStyles?: Record<string, any>;
  onPress?: () => void;
};

export default function CustomButton({
  label,
  onPress,
  containerStyles = {},
  textStyles = {},
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...containerStyles }}
      activeOpacity={0.7}
    >
      <Text style={{ ...styles.btnLabel, ...textStyles }}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.primary,
    fontSize: 16,
    color: "white",
    padding: 16,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  btnLabel: {
    fontSize: 20,
    color: "white",
  },
});
