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
import { DeleteModal } from "@/components/DeleteModal/DeleteModal";
import { useExamMutation } from "./useExamMutation";
import { useExamsScreenStore } from "./useExamsScreenStore";
export default function ExamsScreen() {
  const examsFields: Fields[] = ["DATE", "RNI", "HEMA", "MARE"];
  const { toggleModal, modalOpen, toggleDeleteModal, deleteModal } =
    useExamModalStore();
  const { listExamQuery } = useExamQuery();
  const { opacity, handleRemoveExam } = useExamsScreen();
  const { order, sortBy } = useExamsScreenStore();

  return (
    <>
      <Header title="Exames">
        <FieldOrdering fields={examsFields} order={order} sortBy={sortBy} />
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
      <DeleteModal
        deleteFn={handleRemoveExam}
        toggleModal={toggleDeleteModal}
        modalOpen={deleteModal}
        label="Excluir Exame"
        title="Deseja realmente excluir o exame?"
      />
    </>
  );
}
