import { SwitchTheme } from 'src/components/switchTheme/switchTheme.tsx';
import { BurgerButton } from 'src/components/_common/burgerButton/burgerButton.tsx';

import './header.css';

type HeaderProps = {
  showMenu?: boolean;
  showThemeToggle?: boolean;
  onBurgerClick: () => void;
};

export const Header = ({ showThemeToggle = false, showMenu = false, onBurgerClick }: HeaderProps) => (
  <header className="page-header">
    <BurgerButton isMenuToggleActive={showMenu} onClick={onBurgerClick} />
    <SwitchTheme showIcon={showThemeToggle || false} />
  </header>
);
