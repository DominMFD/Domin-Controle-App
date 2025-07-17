import api from "../api";
import { Exam } from "../models/Exam";

export const ExamsAdapter = {
  async addExam(exam: Exam) {
    try {
      const response = api.post("exams", exam);
      return response;
    } catch {
      throw new Error("erro ao criar exame");
    }
  },
};
