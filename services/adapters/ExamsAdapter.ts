import api from "../api";
import { AddExam, Exam } from "../models/Exam";

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

  async deleteExam(id: Exam["id"]) {
    try {
      const response = api.delete(`exams/${id}`);
      return response;
    } catch {
      throw new Error("erro ao deletar os exames");
    }
  },
};
