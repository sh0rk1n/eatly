import { LoginDto } from "src/features/AuthByUsername/model/schemas/login.schemas";
import axios from "axios";
import { API_URL } from "src/shared/api/api";
import { User } from "src/features/AuthByUsername/model/schemas/user.schemas";

class AuthService {
  async login(dto: LoginDto) {
    const res = await axios.post<User | undefined>(`${API_URL}/login`, dto);
    return res.data;
  }
}

export const authService = new AuthService();
