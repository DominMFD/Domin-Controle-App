import { ExamsAdapter } from "./adapters/ExamsAdapter";
import { AddExam, Exam } from "./models/Exam";

export const ExamsService = {
  async addExam(exam: AddExam) {
    return ExamsAdapter.addExam(exam);
  },

  async listExams() {
    return ExamsAdapter.listExams();
  },

  async removeExam(id: Exam["id"]) {
    return ExamsAdapter.deleteExam(id);
  },
};
