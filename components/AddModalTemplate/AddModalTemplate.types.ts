export type ModalProps = {
  toggleModal: () => void;
  modalOpen: boolean;
};

export type AddModalTemplateProps = ModalProps & {
  children: React.ReactNode;
};
