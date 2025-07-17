import { useState } from "react";

export function useExamsScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(open => !open);
  };

  return {
    modalOpen,
    setModalOpen,
    toggleModal,
  };
}
