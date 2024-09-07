import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthDto } from "src/features/AuthByUsername/model/schemas/auth.schemas";

interface UserState {
  user?: AuthDto;
  isAuth: boolean;
}

interface UserActions {
  login: (user: AuthDto) => void;
  logout: () => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  persist(
    devtools((set) => ({
      users: undefined,
      isAuth: false,
      login: (user) => set({ user, isAuth: true }),
      logout: () => set({ user: undefined, isAuth: false }),
    })),
    {
      name: "user-store",
    },
  ),
);
