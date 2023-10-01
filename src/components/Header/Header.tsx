import { SwitchTheme } from 'src/components/SwitchTheme/SwitchTheme';
import { BurgerButton } from 'src/components/_common/BurgerButton/BurgerButton';

import './header.css';

type HeaderProps = {
  showThemeToggle?: boolean;
  showMenu?: boolean;
};

export const Header = ({ showThemeToggle, showMenu }: HeaderProps) => {
  return (
    <header className="page-header">
      <BurgerButton isMenuToggleActive={!!showMenu} />
      <SwitchTheme showIcon={showThemeToggle || false} />
    </header>
  );
};
