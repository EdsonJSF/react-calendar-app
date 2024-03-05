import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDateModalOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onCloseDateModal: (state) => {
      state.isDateModalOpen = false;
    },
    onOpenDateModal: (state) => {
      state.isDateModalOpen = true;
    },
  },
});

export const { onCloseDateModal, onOpenDateModal } = uiSlice.actions;
