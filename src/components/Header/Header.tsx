import { useHeader } from 'src/components/Header/hook';
import { SwitchThemeIcon } from 'src/components/_common/icons/SwitchThemeIcon';
import { SwitchTheme } from 'src/components/SwitchTheme/SwitchTheme';
import { MainMenuButton } from 'src/components/MainMenuButton/MainMenuButton';

import './header.css';

type HeaderProps = {
  showThemeToggle?: boolean;
  isMenuToggleActive?: boolean;
};

export const Header = ({ showThemeToggle, isMenuToggleActive }: HeaderProps) => {
  const { isMenuToggleActive: menuToggleActive } = useHeader(isMenuToggleActive);

  return (
    <header className="page-header">
      <MainMenuButton color="white" fontSize={16} isMenuToggleActive={menuToggleActive} />
      {showThemeToggle && (
        <SwitchTheme>
          <SwitchThemeIcon color="white" fontSize={16} />
        </SwitchTheme>
      )}
    </header>
  );
};
