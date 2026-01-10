import { SearchIcon } from "@/assets/images/icons/SearchIcon";
import { View, TextInput } from "react-native";
import { SearchInputProps } from "./SearchInput.types";

export function SearchInput(props: SearchInputProps) {
  return (
    <View className="bg-main_white rounded-[10px] placeholder:text-[#1B1B1B]/42 font-bold text-lg text-main_black flex-row items-center justify-between px-[10px] flex-1 gap-[4px]">
      <SearchIcon width={18} height={18} color="#1A1A1A" />
      <TextInput className="flex-1" {...props} />
    </View>
  );
}
