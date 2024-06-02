import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'src/store/selectors/switchTheme';
import { toggleTheme } from 'src/store/slices/switchTheme';

export const THEMES = {
  light: 'light',
  dark: 'dark',
};

export const useSwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const applyThemeStyles = useCallback((currentTheme: string) => {
    const { body } = document;
    body.setAttribute('data-theme', currentTheme);
  }, []);

  useEffect(() => {
    applyThemeStyles(theme);
  }, [applyThemeStyles, theme]);

  return useCallback(() => {
    const newTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;
    dispatch(toggleTheme(newTheme));
    applyThemeStyles(newTheme);
  }, [dispatch, applyThemeStyles, theme]);
};
