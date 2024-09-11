import { axiosInstance } from "shared/api/axios";
import {
  AuthDto,
  AuthResponseDto,
} from "features/AuthByUsername/model/schemas/auth.schemas";
import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";

class AuthService {
  async signUp({ name, password, email }: AuthDto) {
    const { data } = await axiosInstance.post("/register", {
      name,
      email,
      password,
    });
    AccessTokenService.set(data.token);
    return data;
  }

  async signIn({ email, password }: AuthDto) {
    const { data, status } = await axiosInstance.post<AuthResponseDto>(
      "/auth",
      {
        email,
        password,
      },
    );

    if (status === 200 || status === 201) {
      AccessTokenService.set(data.token);
    }

    return data;
  }
}

export const authService = new AuthService();
