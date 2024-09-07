import { IconicButton } from 'src/components/_common/iconicButton/iconicButton';
import { SwitchThemeIcon } from 'src/components/_common/icons/switchThemeIcon';

import { useSwitchTheme } from './hook';
import { useSelector } from 'react-redux';
import { selectMenu } from 'src/store/selectors/menuButton';

export const SwitchTheme = () => {
  const handleSwitchTheme = useSwitchTheme();
  const isMenuActive = useSelector(selectMenu);

  return (
    <>
      {isMenuActive && (
        <IconicButton onClickHandler={handleSwitchTheme}>
          <SwitchThemeIcon />
        </IconicButton>
      )}
    </>
  );
};
