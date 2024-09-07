import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "src/features/AuthByUsername/model/schemas/user.schemas";

interface UserState {
  user?: User;
}

interface UserActions {
  setUser: (user: User | undefined) => void;
  login: (user: User) => void;
  logout: () => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  persist(
    devtools((set) => ({
      users: [],
      setUser: (user: User | undefined) => set({ user }),
      login: (user) => set({ user }),
      logout: () => set({}),
    })),
    {
      name: "user-store",
    },
  ),
);
