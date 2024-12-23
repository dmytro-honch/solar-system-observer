import { IconicButton } from 'src/components/_common/iconicButton/iconicButton';
import { SwitchThemeIcon } from 'src/components/_common/icons/switchThemeIcon';
import { useTheme } from 'src/components/switchTheme/hook';

import { useSelector } from 'react-redux';
import { selectMenu } from 'src/store/selectors/menuButton';

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  const isMenuActive = useSelector(selectMenu);

  return (
    <>
      {isMenuActive && <IconicButton onClickHandler={handleToggle}>{theme ? <SwitchThemeIcon /> : false}</IconicButton>}
    </>
  );
};
