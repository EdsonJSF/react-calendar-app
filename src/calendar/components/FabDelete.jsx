import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
  const { hasEventSelected, startDeletingEvent } = useCalendarStore();

  const handleClickDelete = () => {
    startDeletingEvent();
  };

  return (
    <>
      {hasEventSelected && (
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
