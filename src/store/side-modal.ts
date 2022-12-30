import create from "zustand";
import { persist } from "zustand/middleware";

type SideModalStore = {
  isVisible: boolean;
  open: () => void;
  close: () => void;
};

export const useSideModal = create(
  persist<SideModalStore>((set) => ({
    isVisible: false,
    open: () => set({ isVisible: true }),
    close: () => set({ isVisible: false }),
  }))
);
