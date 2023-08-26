import { SwitchTheme } from 'src/components/SwitchTheme/SwitchTheme';
import { BurgerButton } from 'src/components/_common/BurgerButton/BurgerButton';

import './header.css';

type HeaderProps = {
  showThemeToggle?: boolean;
  isMenuActive?: boolean;
};

export const Header = ({ showThemeToggle, isMenuActive }: HeaderProps) => {
  return (
    <header className="page-header">
      <BurgerButton isMenuToggleActive={!!isMenuActive} />
      <SwitchTheme showIcon={showThemeToggle} />
    </header>
  );
};
