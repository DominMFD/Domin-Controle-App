import { Exam } from "@/services/models/Exam";
import { ExamsSortBy } from "@/types/ExamsSortBy.types";
import { IOrder } from "@/types/Order.types";
import { create } from "zustand";

type useExamsScreenStoreType = {
  idForDelete: number | null;
  choseIdForDelete: (id: Exam["id"] | null) => void;
  order: IOrder;
  setOrder: (order: IOrder) => void;
  sortBy: ExamsSortBy;
  setSortBy: (sortBy: ExamsSortBy) => void;
};

export const useExamsScreenStore = create<useExamsScreenStoreType>(set => ({
  idForDelete: null,
  order: "asc",
  sortBy: "date",
  choseIdForDelete: id =>
    set(() => ({
      idForDelete: id,
    })),

  setOrder: order =>
    set(() => ({
      order,
    })),
  setSortBy: sortBy =>
    set(() => ({
      sortBy,
    })),
}));
