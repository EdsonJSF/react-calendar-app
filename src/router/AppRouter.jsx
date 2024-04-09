import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth";
import { CalendarRoutes } from "../calendar";
import { statusOptions } from "../store";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === statusOptions.checking) {
    return <h3>Cargando...</h3>;
  }

  return (
    <Routes>
      {status === statusOptions.authenticated ? (
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
