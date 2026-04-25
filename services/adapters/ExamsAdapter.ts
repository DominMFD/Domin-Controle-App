import { error } from "./../../node_modules/expo-dev-launcher/node_modules/ajv/lib/vocabularies/applicator/dependencies";
import firestore from "@react-native-firebase/firestore";
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
      await firestore().collection(COLLECTION).add(exam);
    } catch (error) {
      console.log("Error creating exam:", error);
    }
  },

  async listExams(sortBy: string, order: IOrder): Promise<Exam[]> {
    try {
      const field = sortByMap[sortBy] ?? "date";
      const snapshot = await firestore()
        .collection(COLLECTION)
        .orderBy(field, order)
        .get();
      return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: data.date?.toDate() ?? new Date(),
        } as Exam;
      });
    } catch (error) {
      console.log("Error listing exams:", error);
    }
  },

  async deleteExam(id: Exam["id"]) {
    try {
      await firestore().collection(COLLECTION).doc(id).delete();
    } catch {
      throw new Error("erro ao deletar o exame");
    }
  },
};
