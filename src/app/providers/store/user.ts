import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";

interface UserState {
  user?: AuthDto | null;
}

interface UserActions {
  login: (user: AuthDto) => void;
  logout: () => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  persist(
    devtools((set) => ({
      user: null, // если не проинициализировать, то не срабатывает useEffect /auth_me
      login: (user: AuthDto) => set({ user }),
      logout: () => set({ user: null }),
    })),
    {
      name: "user-store",
    },
  ),
);
