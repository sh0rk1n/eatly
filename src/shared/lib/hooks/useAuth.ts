import { authService } from "features/AuthByUsername/model/services/auth";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";

export const useAuth = () => {
  const signUp = async (data: AuthDto) => {
    try {
      await authService.signUp(data);
    } catch (error) {
      console.log("Ошибка в регистрации API", error);
    }
  };

  const signIn = async (data: AuthDto) => {
    try {
      await authService.signIn(data);
    } catch (error) {
      console.log("Ошибка в авторизации API", error);
    }
  };

  return { signUp, signIn };
};
