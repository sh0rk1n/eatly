import { axiosInstance } from "shared/api/axios";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";

class AuthService {
  async login(dto: AuthDto) {
    const res = await axiosInstance.post<AuthDto | undefined>(`/login`, dto);
    return res.data;
  }
}

export const authService = new AuthService();
