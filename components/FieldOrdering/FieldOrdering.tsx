import { DoubleArrowIcon } from "@/assets/images/icons/DoubleArrowIcon";
import { Pressable, View, Text } from "react-native";
import { FieldOrderingProps } from "./FieldOrdering.types";
import useFieldOrdering from "./useFieldOrdering";

export default function FieldOrdering({ fields }: FieldOrderingProps) {
  const { handleToggleOrdenation } = useFieldOrdering();

  return (
    <View className="flex-row bg-main_white rounded-[10px] border border-border_color justify-between">
      {fields.map(value => (
        <Pressable
          key={value}
          className="flex-row px-4 py-[11.5px] items-center gap-[8px] flex-1 justify-center border-r border-border_color"
        >
          <Text className="text-lg text-main_black font-bold capitalize">
            {value.toLowerCase()}
          </Text>
          <DoubleArrowIcon
            color1="#1B1B1B"
            color2="#1B1B1B"
            width={13}
            height={18}
          />
        </Pressable>
      ))}
    </View>
  );
}
