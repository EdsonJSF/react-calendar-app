import { useDispatch, useSelector } from "react-redux";

import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (event) => {
    dispatch(onSetActiveEvent(event));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: go to backend

    if (calendarEvent._id) {
      // UPDATE
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // CREATE
      dispatch(onAddNewEvent({ ...calendarEvent, _id: crypto.randomUUID() }));
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
