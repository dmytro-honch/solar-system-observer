import { SwitchTheme } from 'src/components/switchTheme/switchTheme.tsx';
import { BurgerButton } from 'src/components/_common/burgerButton/burgerButton.tsx';

import './header.css';

type HeaderProps = {
  showMenu?: boolean;
  showThemeToggle?: boolean;
};

export const Header = ({ showThemeToggle = false, showMenu = false }: HeaderProps) => (
  <header className="page-header">
    <BurgerButton isMenuToggleActive={!!showMenu} />
    <SwitchTheme showIcon={showThemeToggle || false} />
  </header>
);
