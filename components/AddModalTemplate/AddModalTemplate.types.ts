export type ModalProps = {
  toggleModal: () => void;
  modalOpen: boolean;
  title?: string;
};

export type AddModalTemplateProps = ModalProps & {
  children: React.ReactNode;
};
