import { useDispatch, useSelector } from "react-redux";

import { onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (event) => {
    dispatch(onSetActiveEvent(event));
  };

  return {
    events,
    activeEvent,
    setActiveEvent,
  };
};
