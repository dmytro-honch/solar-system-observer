import { IconicButton } from 'src/components/_common/IconicButton/IconicButton';
import { SwitchThemeIcon } from 'src/components/_common/icons/SwitchThemeIcon';

import { useSwitchTheme } from './hook';

type SwitchProps = {
  showIcon?: boolean;
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
