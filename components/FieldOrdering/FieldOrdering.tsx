import { DoubleArrowIcon } from "@/assets/images/icons/DoubleArrowIcon";
import { Pressable, View, Text } from "react-native";
import { FieldOrderingProps } from "./FieldOrdering.types";

export default function FieldOrdering({ fields }: FieldOrderingProps) {
  return (
    <View className="flex-row bg-main_white rounded-[10px] border border-border_color justify-between">
      {fields.map(value => (
        <Pressable className="flex-row px-4 py-[11.5px] items-center gap-[8px] flex-1 justify-center border-r border-border_color">
          <Text className="text-lg text-main_black font-bold capitalize">
            {value.toLowerCase()}
          </Text>
          <DoubleArrowIcon width={13} height={18} />
        </Pressable>
      ))}
    </View>
  );
}
