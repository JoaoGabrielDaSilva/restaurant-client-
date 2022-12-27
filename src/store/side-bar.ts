import create from "zustand";
import { persist } from "zustand/middleware";

type SidebarStore = {
  isVisible: boolean;
  open: () => void;
  close: () => void;
};

export const useSideBar = create(
  persist<SidebarStore>((set) => ({
    isVisible: true,
    open: () => set({ isVisible: true }),
    close: () => set({ isVisible: false }),
  }))
);
