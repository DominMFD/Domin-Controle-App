import { create } from "zustand";

type useAddModalStoreType = {
  modalOpen: boolean;
  toggleModal: () => void;
  deleteModal: boolean;
  toggleDeleteModal: () => void;
};

export const useExamModalStore = create<useAddModalStoreType>(set => ({
  modalOpen: false,
  deleteModal: false,
  toggleModal: () =>
    set(state => ({
      modalOpen: !state.modalOpen,
    })),
  toggleDeleteModal: () =>
    set(state => ({
      deleteModal: !state.deleteModal,
    })),
}));
