import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  username: string;
  password: string;
  role: string;
};

interface UserState {
  login: string;
  password: string;
  users: User[];
  isAuth: boolean;
  setLogin: (value: string) => void;
  setPassword: (value: string) => void;
  setUsers: (users: User[]) => void;
  setIsAuth: (isAuth: boolean) => void;
  // register maybe нужно под него новый файл создать ???
  newUsername: string;
  setNewUsername: (newUsername: string) => void;
  newPassword: string;
  setNewPassword: (newPassword: string) => void;
}

export const useStore = create<UserState>()(
  persist(
    (set) => ({
      users: [],
      login: "",
      password: "",
      isAuth: false,
      setIsAuth: (isAuth) => set({ isAuth }),
      setLogin: (login) => set({ login }),
      setPassword: (password) => set({ password }),
      setUsers: (users) => set({ users }),
      newUsername: "",
      setNewUsername: (newUsername) => set({ newUsername }),
      newPassword: "",
      setNewPassword: (newPassword) => set({ newPassword }),
    }),
    {
      name: "user-store",
      onRehydrateStorage: (state) => {
        const storageAuth = localStorage.getItem("isAuth");
        if (storageAuth === "true") {
          state.isAuth = true;
        }
      },
    },
  ),
);
