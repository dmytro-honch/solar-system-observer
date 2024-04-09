import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from 'src/store/selectors/switchTheme';
import { toggleTheme } from 'src/store/slices/switchTheme';
import { THEMES } from 'src/constants';

export const useSwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const applyThemeStyles = useCallback((currentTheme) => {
    const body = document.body;
    body.setAttribute('data-theme', currentTheme);
  }, []);

  useEffect(() => {
    applyThemeStyles(theme);
  }, [applyThemeStyles, theme]);

  const handleSwitchTheme = useCallback(() => {
    const newTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;
    dispatch(toggleTheme(newTheme));
    applyThemeStyles(newTheme);
  }, [dispatch, applyThemeStyles, theme]);

  return handleSwitchTheme;
};
