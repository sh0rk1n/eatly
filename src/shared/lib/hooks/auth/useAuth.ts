import { useAuthStore } from "app/providers/store/auth";
import { authService } from "features/AuthByUsername/model/services/authService";
import { UserDto } from "entities/User";

export const useAuth = () => {
  const { auth } = useAuthStore();

  const getUserInfo = async () => {
    // TODO: если буду реализовывать Profile, то переместить
    try {
      return await authService.getUserInfo();
    } catch (error) {
      console.log("Ошибка при получении пользователей", error);
      return null;
    }
  };

  const signUp = async (data: UserDto) => {
    try {
      await authService.signUp(data);
      auth(data);
    } catch (error) {
      console.log("Ошибка в регистрации API", error);
    }
  };

  const signIn = async (data: UserDto) => {
    try {
      await authService.signIn(data);
      auth(data);
    } catch (error) {
      console.log("Ошибка в авторизации API", error);
    }
  };

  return { getUserInfo, signUp, signIn };
};
