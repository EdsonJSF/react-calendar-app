import { configureStore } from "@reduxjs/toolkit";

import { authSlice, calendarSlice, uiSlice } from "./";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware({ serializableCheck: false }),
});
