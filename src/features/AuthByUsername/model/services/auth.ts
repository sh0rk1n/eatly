import { axiosInstance } from "shared/api/axios";
import {
  AuthDto,
  AuthResponseDto,
} from "features/AuthByUsername/model/schemas/auth.schemas";
import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";

class AuthService {
  async getAuthMe() {
    const res = await axiosInstance.get<AuthDto>("/auth_me", {
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

  async signIn({ email, password }: AuthDto) {
    const response = await axiosInstance.post<AuthResponseDto>("/auth", {
      email,
      password,
    });

    if (response.status === 200) {
      AccessTokenService.set(response.data.accessToken);
    }
  }
}

export const authService = new AuthService();
