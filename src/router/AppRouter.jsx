import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth";
import { CalendarRoutes } from "../calendar";
import { statusOptions } from "../store";

export const AppRouter = () => {
  const authStatus = "checking";

  return (
    <Routes>
      {authStatus === statusOptions.authenticated ? (
        <>
          <Route path="/calendar/*" element={<CalendarRoutes />} />
          <Route path="/*" element={<Navigate to="/calendar" />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth" />} />
        </>
      )}
    </Routes>
  );
};
