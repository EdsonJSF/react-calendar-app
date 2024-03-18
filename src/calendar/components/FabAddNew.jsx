import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  const { setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();

  const handleClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        id: "0001",
        name: "name",
      },
    });
    openDateModal();
  };

  return (
    <button
      className="btn btn-primary position-fixed end-0 bottom-0 m-3 rounded-circle"
      onClick={handleClickNew}
    >
      <i className="fas fa-plus"></i>
    </button>
  );
};
