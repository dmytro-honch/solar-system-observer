import { useContext } from 'react';
import { ThemeContext } from 'src/components/switchTheme/useThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('Context must be used within a context provider');
  }
  return context;
};
