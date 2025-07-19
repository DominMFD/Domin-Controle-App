import { XIcon } from "@/assets/images/icons/XIcon";
import { View, Text, Pressable } from "react-native";
import { ExamsItemProps } from "./ExamsItem.types";
import dayjs from "dayjs";
import { useExamModalStore } from "../../useExamModalStore";
import { useExamsScreenStore } from "../../useExamsScreenStore";

export default function ExamsItem({ exam }: ExamsItemProps) {
  const { toggleDeleteModal } = useExamModalStore();
  const { choseIdForDelete } = useExamsScreenStore();

  const deleteExam = () => {
    choseIdForDelete(exam.id);
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
        {dayjs(exam.date).format("DD/MM/YYYY")}
      </Text>
      <Text className="font-medium text-lg text-main_black flex-1 text-center">
        {exam?.rni ?? "-"}
      </Text>
      <Text className="font-medium text-lg text-main_black flex-1 text-center">
        {exam?.hematocrito ?? "-"}
      </Text>
      <Text className="font-medium text-lg text-main_black flex-1 text-center">
        {exam.marevan}
      </Text>
      <Pressable
        className="items-center justify-center absolute right-3"
        onPress={deleteExam}
      >
        <XIcon width={15} height={15} strokeWidth={"1.5"} />
      </Pressable>
    </View>
  );
}
