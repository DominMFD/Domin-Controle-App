import { Exam } from "@/services/models/Exam";
import { Oxygenation } from "@/services/models/Oxygenation";
import { IOrder } from "@/types/Order.types";
import { create } from "zustand";

type useOxigenationsScreenStoreType = {
  idForDelete: number | null;
  choseIdForDelete: (id: Oxygenation["id"] | null) => void;
  order: IOrder;
  setOrder: (order: IOrder) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
};

export const useOxigenationsScreenStore =
  create<useOxigenationsScreenStoreType>(set => ({
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
