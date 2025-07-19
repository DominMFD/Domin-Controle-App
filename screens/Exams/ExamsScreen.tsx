import Header from "@/components/Header/Header";
import React from "react";
import FieldOrdering from "../../components/FieldOrdering/FieldOrdering";
import { Fields } from "../../components/FieldOrdering/FieldOrdering.types";
import AddButton from "@/components/AddButton/AddButton";
import AddModalTemplate from "@/components/AddModalTemplate/AddModalTemplate";
import AddExamModal from "./components/AddExamModal/AddExamModal";
import { Animated, View } from "react-native";
import { useExamModalStore } from "./useExamModalStore";
import { useExamQuery } from "./useExamQuery";
import ExamsList from "./components/ExamsList/ExamsList";
import { useExamsScreen } from "./useExamsScreen";
import { PapperIcon } from "@/assets/images/icons/PapperIcon";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
export default function ExamsScreen() {
  const examsFields: Fields[] = ["DATA", "RNI", "HEMA", "MARE"];
  const { toggleModal } = useExamModalStore();
  const { listExamQuery } = useExamQuery();
  const { opacity } = useExamsScreen();

  return (
    <>
      <Header title="Exames">
        <FieldOrdering fields={examsFields} />
      </Header>
      {listExamQuery.isLoading ? (
        <View className="items-center justify-center flex-1">
          <Animated.View style={{ opacity }}>
            <PapperIcon width={210} height={210} color="#B22222" />
          </Animated.View>
        </View>
      ) : (
        <ExamsList exams={listExamQuery.data?.data} />
      )}
      <AddButton onPress={toggleModal} />
      <AddExamModal />
    </>
  );
}
