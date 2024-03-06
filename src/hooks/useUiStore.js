import { useDispatch, useSelector } from "react-redux";

import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
  const disparch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    disparch(onOpenDateModal());
  };

  const closeDateModal = () => {
    disparch(onCloseDateModal());
  };

  return {
    isDateModalOpen,
    closeDateModal,
    openDateModal,
  };
};
