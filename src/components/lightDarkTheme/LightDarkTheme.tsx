import { useState, useEffect, useCallback } from 'react';

export const LightDarkThemeToggle = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
  const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }, [theme]);

  useEffect(() => {
    applyThemeStyles();
  }, [theme]);

  const applyThemeStyles = () => {
    const body = document.body;
    if (theme === 'light') {
      body.setAttribute('data-theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <div>
      <button onClick={toggleTheme}>ToggleTheme</button>
    </div>
  );
};
