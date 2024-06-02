import { IconicButton } from 'src/components/_common/iconicButton/iconicButton.tsx';
import { SwitchThemeIcon } from 'src/components/_common/icons/switchThemeIcon.tsx';

import { useSwitchTheme } from './hook';

type SwitchProps = {
  showIcon: boolean;
};

export const SwitchTheme = ({ showIcon }: SwitchProps) => {
  const handleSwitchTheme = useSwitchTheme();

  return (
    <>
      {showIcon && (
        <IconicButton onClickHandler={handleSwitchTheme}>
          <SwitchThemeIcon />
        </IconicButton>
      )}
    </>
  );
};
