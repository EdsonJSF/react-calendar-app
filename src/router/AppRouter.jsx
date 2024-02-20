import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth";
import { CalendarRoutes } from "../calendar";

export const AppRouter = () => {
  const authStatus = "authenticated";
  return (
    <Routes>
      {authStatus === "authenticated" ? (
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
