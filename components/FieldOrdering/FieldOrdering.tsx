import { DoubleArrowIcon } from "@/assets/images/icons/DoubleArrowIcon";
import { Pressable, View, Text } from "react-native";
import { FieldOrderingProps } from "./FieldOrdering.types";
import useFieldOrdering from "./useFieldOrdering";
import { useExamsScreenStore } from "@/screens/Exams/useExamsScreenStore";

export default function FieldOrdering({
  fields,
  order,
  sortBy,
}: FieldOrderingProps) {
  const { handleToggleOrdenation } = useFieldOrdering();

  const setColor1 = (sortByValue: string) => {
    if (sortBy !== sortByValue || order === "asc") return "#1B1B1B";

    return "#828282";
  };

  const setColor2 = (sortByValue: string) => {
    if (sortBy !== sortByValue || order === "desc") return "#1B1B1B";

    return "#828282";
  };

  return (
    <View className="flex-row bg-main_white rounded-[10px] border border-border_color justify-between">
      {fields.map(value => {
        const valueLowerCase = value.toLowerCase();
        return valueLowerCase !== "mare" ? (
          <Pressable
            key={value}
            className="flex-row px-4 py-[11.5px] items-center gap-[8px] flex-1 justify-center border-r border-border_color"
            onPress={() =>
              handleToggleOrdenation({ newSortBy: valueLowerCase })
            }
          >
            <Text className="text-lg text-main_black font-bold capitalize">
              {valueLowerCase === "date" ? "Data" : valueLowerCase}
            </Text>
            <DoubleArrowIcon
              color1={setColor1(valueLowerCase)}
              color2={setColor2(valueLowerCase)}
              width={13}
              height={18}
            />
          </Pressable>
        ) : (
          <View
            key={value}
            className="flex-row px-4 py-[11.5px] items-center gap-[8px] flex-1 justify-center"
          >
            <Text className="text-lg text-main_black font-bold capitalize">
              {value.toLowerCase()}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
