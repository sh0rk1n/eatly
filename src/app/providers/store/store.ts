import { create } from "zustand";

type User = {
  id: string;
  username: string;
  password: string;
  role: string;
};

interface RootState {
  login: string;
  password: string;
  users: User[];
  isAuth: boolean;
  setLogin: (value: string) => void;
  setPassword: (value: string) => void;
  setUsers: (users: User[]) => void;
  setIsAuth: (isAuth: boolean) => void;
}

export const useStore = create<RootState>((set) => ({
  login: "",
  password: "",
  users: [],
  isAuth: false,

  setLogin: (value: string) => set({ login: value }),
  setPassword: (value: string) => set({ password: value }),
  setUsers: (users: User[]) => set({ users }),
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
}));
