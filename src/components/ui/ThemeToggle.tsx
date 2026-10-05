'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '@/store/useThemeStore';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`p-2 text-neutral-400 hover:text-white transition-colors rounded-full ${className}`}
      >
        <span className="w-5 h-5 block" />
      </button>
    );
  }

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 text-neutral-300 hover:text-white transition-all duration-300 flex items-center gap-2 group relative select-none rounded-full ${className}`}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isLight ? (
          <Moon className="w-5 h-5 text-neutral-700 group-hover:text-black transition-transform duration-300 hover:scale-110" />
        ) : (
          <Sun className="w-5 h-5 text-neutral-300 group-hover:text-amber-300 transition-transform duration-300 hover:scale-110" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs uppercase font-semibold tracking-wider">
          {isLight ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
