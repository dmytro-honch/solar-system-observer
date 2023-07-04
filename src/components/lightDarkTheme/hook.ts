import { useState, useEffect, useCallback } from 'react';
import { dark, light } from 'src/constants';


export const useLightDarkTheme = () => {

    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);
    
    const toggleTheme = useCallback(() => {
      const newTheme = theme === dark ? dark : light;
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }, [theme]);
    
    useEffect(() => {
      applyThemeStyles();
    }, [theme]);
    
    const applyThemeStyles = () => {
      const body = document.body;
      if (theme === light) {
        body.setAttribute('data-theme', light);
      } else {
        body.setAttribute('data-theme', dark);
      }
    };
    
    return { toggleTheme };
};

