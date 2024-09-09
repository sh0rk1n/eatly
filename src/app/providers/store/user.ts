import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";

interface UserState {
  user?: AuthDto;
  isAuth: boolean;
}

interface UserActions {
  setIsAuth: (isAuth: boolean) => void; // TODO: ВРЕМЕННО! УБРАТЬ
  login: (user: AuthDto) => void;
  logout: () => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  persist(
    devtools((set) => ({
      user: undefined,
      isAuth: false,
      setIsAuth: (isAuth) => set({ isAuth }),
      login: (user) => set({ user }),
      logout: () => set({ user: undefined }),
    })),
    {
      name: "user-store",
    },
  ),
);
