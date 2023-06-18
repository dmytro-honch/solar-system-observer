import { useState, useEffect } from 'react';

export const LightDarkThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
    applyThemeStyles();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyThemeStyles();
  }, [theme]);

  const applyThemeStyles = () => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--primary-color', '#ffffff');
      root.style.setProperty('--secondary-color', '#000000');
    } else {
      root.style.setProperty('--primary-color', '#000000');
      root.style.setProperty('--secondary-color', '#ffffff');
    }
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>Current theme: {theme}</div>
    </div>
  );
};
