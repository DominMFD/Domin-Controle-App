import { ExamsSortBy } from "@/types/ExamsSortBy.types";
import { IOrder } from "@/types/Order.types";
import { ExamsAdapter } from "./adapters/ExamsAdapter";
import { AddExam, Exam } from "./models/Exam";

export const ExamsService = {
  async addExam(exam: AddExam) {
    return ExamsAdapter.addExam(exam);
  },

  async listExams(sortBy: string, order: IOrder) {
    return ExamsAdapter.listExams(sortBy, order);
  },

  async removeExam(id: Exam["id"]) {
    return ExamsAdapter.deleteExam(id);
  },
};
