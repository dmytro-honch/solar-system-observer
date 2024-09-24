import { createContext, ReactNode, useEffect, useState } from 'react';

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface IProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: IProps) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme as 'light' | 'dark';
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
