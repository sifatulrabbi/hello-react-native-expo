import {
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import PrimaryGradient from "@/components/primary-gradient";
import { useState } from "react";

type Props = {
  onSubmit: (value: string) => Promise<void>;
  placeholder?: string;
  disabled?: boolean;
};

export default function CustomTextarea({
  placeholder = "Type your message here...",
  disabled = false,
  onSubmit,
}: Props) {
  const [value, setValue] = useState("");
  return (
    <KeyboardAvoidingView className="w-full flex-row items-end bg-white p-4">
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        className="px-3 py-3 rounded-full bg-primaryLight"
      >
        <AntDesign name="plus" size={20} color="#2563eb" />
      </TouchableOpacity>
      <TextInput
        value={value}
        onChangeText={setValue}
        className="px-4 py-2 text-base border border-gray-200 rounded-3xl flex-1 max-h-60 mx-2"
        placeholder={placeholder}
        multiline
        editable={!disabled}
        maxLength={4096}
      />
      <PrimaryGradient containerStyles="rounded-full">
        <TouchableOpacity
          activeOpacity={0.8}
          className="px-4 py-3"
          onPress={() => onSubmit(value).finally(() => setValue(""))}
          disabled={disabled}
        >
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </PrimaryGradient>
    </KeyboardAvoidingView>
  );
}
