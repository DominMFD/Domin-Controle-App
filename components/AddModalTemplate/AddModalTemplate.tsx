import { XIcon } from "@/assets/images/icons/XIcon";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Pressable,
} from "react-native";
import Modal from "react-native-modal";
import { AddModalTemplateProps } from "./AddModalTemplate.types";

export default function AddModalTemplate({ children }: AddModalTemplateProps) {
  return (
    <Modal
      isVisible
      style={{ margin: 0, justifyContent: "flex-end" }}
      backdropTransitionOutTiming={0}
      swipeDirection="down"
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="bg-neutral_light rounded-t-3xl pt-5 items-center"
      >
        <View className="bg-second_background rounded-t-[20px] w-full">
          <View className="p-[20px] relative">
            <Text className="text-[20px] font-bold text-main_black text-center">
              Adicionar Exame
            </Text>
            <Pressable className="absolute right-[20px] top-[20px]">
              <XIcon
                width={15}
                height={15}
                color={"#1A1A1A"}
                strokeWidth={1.5}
              />
            </Pressable>
          </View>
          {children}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
