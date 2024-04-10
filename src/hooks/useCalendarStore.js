import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";
import { calendarApi } from "../api";
import { convertEventsToDate } from "./convertEventsToDate";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const startLoadingEvent = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const { eventos } = data;
      const events = convertEventsToDate(eventos);

      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error al cargar los eventos",
        error.response.data?.msg || "",
        "error"
      );
    }
  };

  const setActiveEvent = (event) => {
    dispatch(onSetActiveEvent(event));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }

      const { data } = await calendarApi.post("/events", calendarEvent);
      const { evento } = data;
      dispatch(onAddNewEvent({ ...calendarEvent, id: evento.id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error al guardar el evento",
        error.response.data?.msg || "",
        "error"
      );
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

    startLoadingEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
