import { useToggleTheme } from './hook';

import './lightDarkTheme.css';

import { SwitchThemeIcon } from 'src/components/_common/icons/SwitchThemeIcon'


export const LightDarkTheme = () => {
  const handleToggleTheme = useToggleTheme();

  return (
      <button type="button" className="btn-theme-toggle" onClick={handleToggleTheme}>
        <SwitchThemeIcon color="white" fontSize={16} />
      </button>
  );
};


