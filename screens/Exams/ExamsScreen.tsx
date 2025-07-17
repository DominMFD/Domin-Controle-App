import Header from "@/components/Header/Header";
import React from "react";
import ExamsList from "./components/ExamsContent/ExamsContent";
import FieldOrdering from "../../components/FieldOrdering/FieldOrdering";
import { Fields } from "../../components/FieldOrdering/FieldOrdering.types";
import AddButton from "@/components/AddButton/AddButton";
import AddModalTemplate from "@/components/AddModalTemplate/AddModalTemplate";
import AddExamModal from "./components/AddExamModal/AddExamModal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { useAddExamModal } from "./components/AddExamModal/useAddExamModal";
import { useExamsScreen } from "./useExamsScreen";
export default function ExamsScreen() {
  const examsFields: Fields[] = ["DATA", "RNI", "HEMA", "MARE"];
  const { modalOpen, toggleModal } = useExamsScreen();

  return (
    <>
      <Header title="Exames">
        <FieldOrdering fields={examsFields} />
      </Header>
      <ExamsList />
      <AddButton onPress={toggleModal} />
      <AddExamModal modalOpen={modalOpen} toggleModal={toggleModal} />
    </>
  );
}
