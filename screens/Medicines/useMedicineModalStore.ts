import { create } from "zustand";
import { Medicine } from "@/services/models/Medicine";

type useAddModalStoreType = {
  modalOpen: boolean;
  toggleModal: () => void;
  deleteModal: boolean;
  toggleDeleteModal: () => void;
  selectedMedicine: Medicine | null;
  setSelectedMedicine: (medicine: Medicine | null) => void;
};

export const useMedicineModalStore = create<useAddModalStoreType>(set => ({
  modalOpen: false,
  deleteModal: false,
  selectedMedicine: null,
  toggleModal: () =>
    set(state => ({
      modalOpen: !state.modalOpen,
      selectedMedicine: state.modalOpen ? null : state.selectedMedicine,
    })),
  toggleDeleteModal: () =>
    set(state => ({
      deleteModal: !state.deleteModal,
    })),
  setSelectedMedicine: (medicine: Medicine | null) =>
    set({ selectedMedicine: medicine }),
}));
