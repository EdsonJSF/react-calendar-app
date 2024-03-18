import { createSlice } from "@reduxjs/toolkit";

import { addHours } from "date-fns";
const tempEvent = {
  _id: crypto.randomUUID(),
  title: "title",
  notes: "notes",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "bgColor",
  user: {
    id: "0001",
    name: "name",
  },
};

const initialState = {
  events: [tempEvent],
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
    onAddNewEvent: (state, action) => {
      state.events.push(action.payload);
      state.activeEvent = null;
    },
  },
});

export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions;
