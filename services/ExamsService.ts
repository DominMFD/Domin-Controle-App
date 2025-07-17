import { ExamsAdapter } from "./adapters/ExamsAdapter";
import { Exam } from "./models/Exam";

export const ExamsService = {
  async addExam(exam: Exam) {
    return ExamsAdapter.addExam(exam);
  },
};
