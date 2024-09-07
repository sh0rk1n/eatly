import { axiosInstance } from "src/shared/api/axios";
import { AuthDto } from "src/features/AuthByUsername/model/schemas/auth.schemas";

class AuthService {
  async login(dto: AuthDto) {
    const res = await axiosInstance.post<AuthDto | undefined>(`/login`, dto);
    return res.data;
  }
}

export const authService = new AuthService();
