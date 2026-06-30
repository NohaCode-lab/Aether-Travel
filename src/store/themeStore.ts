import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  language: "en" | "ar";
  setTheme: (theme: "light" | "dark") => void;
  setLanguage: (lang: "en" | "ar") => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      language: "en",
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    { name: "travelmind-theme-store" },
  ),
);
