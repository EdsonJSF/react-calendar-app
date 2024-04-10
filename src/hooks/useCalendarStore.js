import { useDispatch, useSelector } from "react-redux";

import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";
import { calendarApi } from "../api";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (event) => {
    dispatch(onSetActiveEvent(event));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent.id) {
      // UPDATE
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      const { data } = await calendarApi.post("/events", calendarEvent);
      const { evento } = data;
      dispatch(onAddNewEvent({ ...calendarEvent, id: evento.id, user }));
    }
  };

  const startDeletingEvent = async () => {
    // TODO: go to backend

    dispatch(onDeleteEvent());
  };

  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
