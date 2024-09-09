import { axiosInstance } from "shared/api/axios";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";

class AuthService {
  async getAuthMe() {
    const res = await axiosInstance.get<AuthDto | undefined>("/auth_me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data;
  }

  async registerUser(formData: AuthDto) {
    try {
      const { data } = await axiosInstance.post("/register", formData);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      console.log("Ошибка в регистрации", error);
      throw error;
    }
  }

  async loginUser(formData: AuthDto) {
    try {
      const { data } = await axiosInstance.post("/auth", formData);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      console.error("Ошибка email/password", error);
      throw error;
    }
  }
}

export const authService = new AuthService();
