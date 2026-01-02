import { XIcon } from "@/assets/images/icons/XIcon";
import { View, Text, Pressable } from "react-native";
import dayjs from "dayjs";
import { OxygenationsItemProps } from "./OxygenationItem.types";
import { useOxigenationModalStore } from "../../useOxygenationModalStore";
import { useOxigenationsScreenStore } from "../../useOxigenationScreenStore";

export default function OxygenationItem({ oxi }: OxygenationsItemProps) {
  const { toggleDeleteModal } = useOxigenationModalStore();
  const { choseIdForDelete } = useOxigenationsScreenStore();

  const deleteOxigenation = () => {
    choseIdForDelete(oxi.id);
    toggleDeleteModal();
  };
  return (
    <View
      className="bg-main_white flex-row p-4 rounded-[20px] gap-2 items-center relative"
      style={{
        elevation: 3,
      }}
    >
      <Text className="font-medium text-lg text-main_black">
        {dayjs(oxi.date).format("DD/MM/YYYY")}
      </Text>
      <Text className="font-medium text-lg text-main_black flex-1 text-center">
        {dayjs(oxi.date).format("HH:mm")}
      </Text>
      <Text className="font-medium text-lg text-main_black flex-1 text-center">
        {oxi.value}
      </Text>
      <Pressable
        className="items-center justify-center absolute right-3"
        onPress={deleteOxigenation}
      >
        <XIcon width={15} height={15} strokeWidth={"1.5"} />
      </Pressable>
    </View>
  );
}
