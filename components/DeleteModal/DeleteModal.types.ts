export type DeleteModalProps = {
  label: string;
  title: string;
  modalOpen: boolean;
  toggleModal: () => void;
  deleteFn: () => void;
};
