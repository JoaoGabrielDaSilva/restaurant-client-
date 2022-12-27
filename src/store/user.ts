import create from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  email: string;
};

type UserStore = User & {
  setUser: (data: User) => void;
};

const initialState: User = {
  id: "",
  email: "",
};

export const useUser = create(
  persist<UserStore>((set) => ({
    ...initialState,
    setUser: (data) => set(data),
  }))
);
