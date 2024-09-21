import { Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  label: string;
  containerStyles?: string;
  textStyles?: string;
  onPress?: () => void;
};

export default function CustomButton({
  label,
  onPress,
  containerStyles = "",
  textStyles = "",
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-white text-center p-4 items-center justify-center rounded-lg ${containerStyles}`}
      activeOpacity={0.7}
    >
      <Text className={`text-black font-semibold text-lg ${textStyles}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
