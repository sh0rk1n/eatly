import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserDto } from "entities/User";

interface UserState {
  user?: UserDto | null;
}

interface UserActions {
  auth: (user: UserDto) => void; // если имя переменной login, то ошибка "login is not func"
  logout: () => void;
}

type UserStore = UserState & UserActions;

export const useAuthStore = create<UserStore>()(
  persist(
    devtools((set) => ({
      user: null, // если не проинициализировать, то не срабатывает useEffect /auth_me
      auth: (user: UserDto) => set({ user }),
      logout: () => set({ user: null }),
    })),
    {
      name: "user-store",
    },
  ),
);
