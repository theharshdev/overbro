import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      toggleTheme: () => {
        const nextTheme = get().theme === 'dark' ? 'light' : 'dark';
        if (typeof document !== 'undefined') {
          const root = document.documentElement;
          if (nextTheme === 'light') {
            root.classList.add('light');
            root.classList.remove('dark');
            root.setAttribute('data-theme', 'light');
          } else {
            root.classList.add('dark');
            root.classList.remove('light');
            root.setAttribute('data-theme', 'dark');
          }
        }
        set({ theme: nextTheme });
      },
      setTheme: (theme: Theme) => {
        if (typeof document !== 'undefined') {
          const root = document.documentElement;
          if (theme === 'light') {
            root.classList.add('light');
            root.classList.remove('dark');
            root.setAttribute('data-theme', 'light');
          } else {
            root.classList.add('dark');
            root.classList.remove('light');
            root.setAttribute('data-theme', 'dark');
          }
        }
        set({ theme });
      },
    }),
    {
      name: 'ubro-theme',
    }
  )
);
