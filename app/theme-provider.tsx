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

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(localStorage.theme);

  useEffect(() => {
    if (theme === THEME.DARK) {
      document.documentElement.classList.add(THEME.DARK);
      localStorage.theme = THEME.DARK;
    } else {
      document.documentElement.classList.remove(THEME.DARK);
      localStorage.theme = THEME.LIGHT;
    }
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
