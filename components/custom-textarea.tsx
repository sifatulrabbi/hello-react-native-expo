import {
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

type Props = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeText?: (val: string) => void;
  onSubmit?: () => Promise<void>;
};

export default function CustomTextarea({
  value = "",
  placeholder = "Type your message here...",
  disabled = false,
  onChangeText,
  onSubmit,
}: Props) {
  return (
    <KeyboardAvoidingView className="w-full flex-row items-end bg-white gap-x-2 p-4">
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        className="px-3 py-3 rounded-full bg-gray-200"
      >
        <AntDesign name="plus" size={20} color="#2563eb" />
      </TouchableOpacity>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className="px-4 py-2 text-base font-medium bg-gray-200 rounded-3xl flex-1 max-h-60"
        placeholder={placeholder}
        multiline
        editable={disabled}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        className="px-4 py-3 rounded-full bg-blue-600"
        onPress={onSubmit}
        disabled={disabled}
      >
        <Ionicons name="send" size={20} color="white" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
