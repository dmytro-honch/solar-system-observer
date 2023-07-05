import { useToggleTheme } from './hook';

export const LightDarkTheme = () => {
  const handleToggleTheme = useToggleTheme();

  return (
    <div>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};
