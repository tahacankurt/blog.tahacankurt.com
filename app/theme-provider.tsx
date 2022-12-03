"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
}

interface ThemeContextInterface {
  theme: string | null;
  setTheme: (c: string) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: THEME.LIGHT,
  setTheme: (_value: string) => {},
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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
