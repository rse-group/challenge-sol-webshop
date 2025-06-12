import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppearanceStore = create(
  persist(
    (set, get) => ({
      interfaceKit: "",
      colorTheme: "",
      setAppearance: (appearance) => set(appearance),
      setInterfaceKit: (kit) => set({ ...get(), interfaceKit: kit }),
      setColorTheme: (theme) => set({ ...get(), colorTheme: theme }),
    }),
    {
      name: "appearance-config",
    }
  )
);

export default useAppearanceStore;
