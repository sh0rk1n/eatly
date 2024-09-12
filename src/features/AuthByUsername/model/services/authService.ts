import { axiosInstance } from "shared/api/axios";

import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";
import { UserDto, UserResponseDto } from "entities/User";

class AuthService {
  async getUserInfo(): Promise<UserDto[]> {
    const { data } = await axiosInstance.get("/users");

    return data;
  }

  async signUp({ name, password, email }: UserDto) {
    const { data } = await axiosInstance.post("/register", {
      name,
      email,
      password,
    });

    AccessTokenService.set(data.token);
    return data;
  }

  async signIn({ email, password }: UserDto) {
    const { data, status } = await axiosInstance.post<UserResponseDto>(
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
