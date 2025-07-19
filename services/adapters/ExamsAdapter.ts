import api from "../api";
import { AddExam } from "../models/Exam";

export const ExamsAdapter = {
  async addExam(exam: AddExam) {
    try {
      const response = api.post("exams", exam);
      return response;
    } catch {
      throw new Error("erro ao criar exame");
    }
  },

  async listExams() {
    try {
      const response = api.get("exams");
      return response;
    } catch {
      throw new Error("erro ao listar os exames");
    }
  },
};
