// import { useState, useEffect, useCallback } from 'react';
// import { THEMES } from 'src/constants';


// export const handleToggleTheme = () => {

//     const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? THEMES.dark : THEMES.light;
//     const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);
    
//     const toggleTheme = useCallback(() => {
//       const newTheme = theme === THEMES.dark ? THEMES.dark : THEMES.light;
//       setTheme(newTheme);
//       localStorage.setItem('theme', newTheme);
//     }, [theme]);
    
//     useEffect(() => {
//       applyThemeStyles();
//     }, [theme]);
    
//     const applyThemeStyles = () => {
//       const body = document.body;
//       if (theme === THEMES.light) {
//         body.setAttribute('data-theme', THEMES.light);
//         return
//       } 
//       body.setAttribute('data-theme', THEMES.dark);
//     };
    
//     return { toggleTheme, applyThemeStyles };
// };

import { useState, useEffect, useCallback } from 'react';
import { THEMES } from 'src/constants';

export const useToggleTheme = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? THEMES.dark : THEMES.light;
  const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);

  const handleToggleTheme = useCallback(() => {
    const newTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyThemeStyles(newTheme);
  }, [theme]);

  useEffect(() => {
    applyThemeStyles(theme);
  }, [theme]);

  const applyThemeStyles = (currentTheme) => {
    const body = document.body;
    body.setAttribute('data-theme', currentTheme);
  };

  return handleToggleTheme;
};
