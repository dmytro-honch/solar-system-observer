import { useState, useEffect, useCallback } from 'react';
import { THEMES } from 'src/constants';

export const useSwitchTheme = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? THEMES.dark : THEMES.light;
  const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);

  const applyThemeStyles = (currentTheme) => {
    const body = document.body;
    body.setAttribute('data-theme', currentTheme);
  };

  useEffect(() => {
    applyThemeStyles(theme);
  }, [theme]);

  const handleSwitchTheme = useCallback(() => {
    const newTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyThemeStyles(newTheme);
  }, [theme]);

  return handleSwitchTheme;
};
