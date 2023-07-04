import { useLightDarkTheme } from './hook';

export const LightDarkThemeToggle = () => {
  const { toggleTheme } = useLightDarkTheme()
  
  return (
    <div>
      <button onClick={toggleTheme}>ToggleTheme</button>
    </div>
  );
};
