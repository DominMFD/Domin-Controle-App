import ContentTemplate from "@/components/ContentTemplate/ContentTemplate";
import { View, Text } from "react-native";
import ExamsItem from "../ExamsItem/ExamsItem";
import { ExamsListProps } from "./ExamsList.types";
import { DeleteModal } from "@/components/DeleteModal/DeleteModal";

export default function ExamsList({ exams }: ExamsListProps) {
  if (!exams || exams.length === 0) {
    return (
      <View className="pt-[32px]">
        <Text className="text-center text-main_white font-bold text-[20px]">
          Não encontramos nenhum exame...
        </Text>
      </View>
    );
  }
  return (
    <ContentTemplate>
      {exams.map(exam => (
        <ExamsItem key={exam.id} exam={exam} />
      ))}
    </ContentTemplate>
  );
}
