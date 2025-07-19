import { ExamsAdapter } from "./adapters/ExamsAdapter";
import { AddExam } from "./models/Exam";

export const ExamsService = {
  async addExam(exam: AddExam) {
    return ExamsAdapter.addExam(exam);
  },

  async listExams() {
    return ExamsAdapter.listExams();
  },
};
