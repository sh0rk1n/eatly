import { authService } from "features/AuthByUsername/model/services/auth";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";
import { useUserStore } from "app/providers/store";
import { useCallback } from "react";

export const useAuth = () => {
  const { login, logout, user } = useUserStore();

  const checkAuth = useCallback(async () => {
    if (!user) return;

    try {
      const authMe = await authService.getAuthMe();
      // eslint-disable-next-line
      authMe && login(authMe);
    } catch (e) {
      console.log("AUTH_ME ОШИБКА", e);
      logout();
    }
  }, [user]);

  const signUp = async (data: AuthDto) => {
    try {
      await authService.signUp(data);
      login(data);
    } catch (error) {
      console.log("Ошибка в регистрации API", error);
    }
  };

  const signIn = async (data: AuthDto) => {
    try {
      await authService.signIn(data);
      login(data);
    } catch (error) {
      console.log("Ошибка в авторизации API", error);
    }
  };

  return { checkAuth, signUp, signIn };
};
