import { useDispatch, useSelector } from "react-redux";

import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post("/auth", {
        email,
        password,
      });
      const { name, uid, token } = data;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name, uid }));
    } catch (error) {
      console.log(error);
      dispatch(onLogout("incorrect credentials"));

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ email, name, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post("auth/new", {
        email,
        name,
        password,
      });
      const { uid, token } = data;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name, uid }));
    } catch (error) {
      console.log(error);
      dispatch(
        onLogout(
          error.response.data?.errors?.password?.msg ||
            error.response.data?.msg ||
            "Error desconocido"
        )
      );

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  return { status, user, errorMessage, startLogin, startRegister };
};
