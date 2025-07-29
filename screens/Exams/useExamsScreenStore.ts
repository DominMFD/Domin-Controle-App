import { Exam } from "@/services/models/Exam";
import { IOrder } from "@/types/Order.types";
import { create } from "zustand";

type useExamsScreenStoreType = {
  idForDelete: number | null;
  choseIdForDelete: (id: Exam["id"] | null) => void;
  order: IOrder;
  setOrder: (order: IOrder) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
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
