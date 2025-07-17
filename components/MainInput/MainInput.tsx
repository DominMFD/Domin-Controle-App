import { TextInput, View, Text } from "react-native";
import { MainInputProps } from "./MainInput.types";
import clsx from "clsx";

export default function MainInput({
  children,
  errorMessage,
  ...props
}: MainInputProps) {
  return (
    <View>
      <View
        className={clsx(
          "bg-main_white rounded-[10px] placeholder:text-[#1B1B1B]/42 font-bold text-lg text-main_black flex-row items-center justify-between px-[10px]",
          errorMessage && "border border-main_red",
        )}
      >
        <TextInput {...props} className="flex-1" />
        {children}
      </View>
      <Text className="text-[#DC3545] text-sm h-[14px]">{errorMessage}</Text>
    </View>
  );
}
