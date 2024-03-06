import { createSlice } from "@reduxjs/toolkit";

import { addHours } from "date-fns";
const tempEvent = {
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
    nameReducer: (state, action) => {},
  },
});

export const { nameReducer } = calendarSlice.actions;
