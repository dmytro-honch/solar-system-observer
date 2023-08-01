import { IconicButton } from 'src/components/_common/IconicButton/IconicButton';
import { SwitchThemeIcon } from 'src/components/_common/icons/SwitchThemeIcon';

import { useSwitchTheme } from './hook';

export const SwitchTheme = () => {
  const handleSwitchTheme = useSwitchTheme();

  return (
    <IconicButton onClickHandler={handleSwitchTheme}>
      <SwitchThemeIcon />
    </IconicButton>
  );
};
