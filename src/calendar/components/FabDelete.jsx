import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { hasEventSelected, startDeletingEvent } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const handleClickDelete = () => {
    startDeletingEvent();
  };

  return (
    <>
      {hasEventSelected && !isDateModalOpen && (
        <button
          className="btn btn-danger position-fixed start-0 bottom-0 m-3 rounded-circle"
          onClick={handleClickDelete}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      )}
    </>
  );
};
