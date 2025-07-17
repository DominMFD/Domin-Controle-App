import { create } from "zustand";

type useAddModalStoreType = {
  modalOpen: boolean;
  toggleModal: () => void;
};

export const useExamModalStore = create<useAddModalStoreType>(set => ({
  modalOpen: false,
  toggleModal: () =>
    set(state => ({
      modalOpen: !state.modalOpen,
    })),
}));
