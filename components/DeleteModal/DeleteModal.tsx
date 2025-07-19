import { XIcon } from "@/assets/images/icons/XIcon";
import { View, Text, Pressable } from "react-native";
import Modal from "react-native-modal";
import MainButton from "../MainButton/MainButton";
import { DeleteModalProps } from "./DeleteModal.types";
import { useExamModalStore } from "@/screens/Exams/useExamModalStore";

export function DeleteModal({
  label,
  title,
  deleteFn,
  modalOpen,
  toggleModal,
}: DeleteModalProps) {
  return (
    <Modal
      isVisible={modalOpen}
      onSwipeComplete={toggleModal}
      onBackdropPress={toggleModal}
    >
      <View className="bg-main_white p-[10px] rounded-[10px] gap-[24px]">
        <View className="flex-row justify-between items-center">
          <Text className="text-[12px] font-light text-main_black">
            {label}
          </Text>
          <Pressable onPress={toggleModal}>
            <XIcon width={12} height={12} strokeWidth={2} />
          </Pressable>
        </View>
        <View className="p-[10px]">
          <Text className="text-center text-main_black text-lg font-medium">
            {title}
          </Text>
        </View>
        <View className="flex-row gap-4 justify-center">
          <View className="max-w-[146px] flex-1">
            <MainButton title="Excluir" variant="blue" onPress={deleteFn} />
          </View>
          <View className="max-w-[146px] flex-1">
            <MainButton
              title="Cancelar"
              variant="default"
              onPress={toggleModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
