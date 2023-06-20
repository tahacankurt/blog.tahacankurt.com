'use client';

import React, {
  createContext, useEffect, useState,
} from 'react';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

interface IThemeContext {
  theme: string | null;
  // eslint-disable-next-line no-unused-vars
  setTheme: (c: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: THEME.LIGHT,
  setTheme: () => {},
});

const initDocTheme = (theme: string) => {
  if (theme !== THEME.DARK) {
    document.documentElement.classList.remove(THEME.DARK);
  }
  document.documentElement.classList.add(theme);
  localStorage.theme = theme;
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.theme : 'light');
  useEffect(() => {
    // If theme initialized before
    if (theme) {
      initDocTheme(theme);
    } else {
      // Get system Theme
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

      if (darkThemeMq?.matches) {
        initDocTheme(THEME.DARK);
        setTheme(THEME.DARK);
      } else {
        initDocTheme(THEME.LIGHT);
      }
    }
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
