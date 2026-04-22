import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { AddExam, Exam } from "../models/Exam";
import { IOrder } from "@/types/Order.types";

const COLLECTION = "exams";

const sortByMap: Record<string, string> = {
  date: "date",
  hema: "hematocrito",
  rni: "rni",
};

export const ExamsAdapter = {
  async addExam(exam: AddExam) {
    try {
      await addDoc(collection(db, COLLECTION), exam);
    } catch {
      throw new Error("erro ao criar exame");
    }
  },

  async listExams(sortBy: string, order: IOrder): Promise<Exam[]> {
    try {
      const field = sortByMap[sortBy] ?? "date";
      const q = query(collection(db, COLLECTION), orderBy(field, order));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Exam);
    } catch {
      throw new Error("erro ao listar os exames");
    }
  },

  async deleteExam(id: Exam["id"]) {
    try {
      await deleteDoc(doc(db, COLLECTION, id));
    } catch {
      throw new Error("erro ao deletar o exame");
    }
  },
};
