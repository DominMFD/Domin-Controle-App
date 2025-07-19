import { Exam } from "@/services/models/Exam";
import { create } from "zustand";

type useExamsScreenStoreType = {
  idForDelete: number | null;
  choseIdForDelete: (id: Exam["id"] | null) => void;
};

export const useExamsScreenStore = create<useExamsScreenStoreType>(set => ({
  idForDelete: null,
  choseIdForDelete: id =>
    set(state => ({
      idForDelete: id,
    })),
}));
