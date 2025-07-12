import { XIcon } from "@/assets/images/icons/XIcon";
import { View, Text, Pressable } from "react-native";

export default function ExamsItem() {
  return (
    <View
      className="bg-main_white flex-row p-4 rounded-[20px] gap-2 items-center"
      style={{
        elevation: 3,
      }}
    >
      <Text className="font-medium text-lg text-main_black">27/04/2025</Text>
      <Text className="font-medium text-lg text-main_black flex-1 text-center">
        3.7
      </Text>
      <Text className="font-medium text-lg text-main_black flex-1 text-center">
        80
      </Text>
      <Text className="font-medium text-lg text-main_black flex-1 text-center">
        3/4
      </Text>
      <Pressable className="items-center justify-center">
        <XIcon width={15} height={15} strokeWidth={"1.5"} />
      </Pressable>
    </View>
  );
}
