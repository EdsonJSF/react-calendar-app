import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router";

export const CalendarApp = () => {
  return (
    <BrowserRouter>
      <h1>Calendar App</h1>
      <hr />

      <AppRouter />
    </BrowserRouter>
  );
};
