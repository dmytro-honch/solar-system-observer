import { useThemeChange } from './hook';

import './SwitchTheme.css';

import { SwitchThemeIcon } from 'src/components/_common/icons/SwitchThemeIcon';

export const SwitchTheme = () => {
  const handleThemeChange = useThemeChange();

  return (
    <button type="button" className="btn-theme-toggle" onClick={handleThemeChange}>
      <SwitchThemeIcon color="white" fontSize={16} />
    </button>
  );
};
