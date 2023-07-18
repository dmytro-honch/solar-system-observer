import { Link } from 'react-router-dom';

import { useHeader } from 'src/components/Header/hook';

import { BurgerIcon } from 'src/components/_common/icons/BurgerIcon';
import { CloseIcon } from 'src/components/_common/icons/CloseIcon';
import { SwitchThemeIcon } from 'src/components/_common/icons/SwitchThemeIcon';
import { LightDarkTheme } from 'src/components/LightDarkTheme/LightDarkTheme';

import { MENU_PATH } from 'src/features/Router/path';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';

import './header.css';


type HeaderProps = {
  showThemeToggle: boolean;
  showBurgerIcon: boolean;
};

export const Header = ({ showThemeToggle, showBurgerIcon }: HeaderProps) => {
  const { isMenuPage } = useHeader();

  return (
    <header className="page-header">
      {isMenuPage ? (
          <Link to={PLANET_OBSERVER_PATH} className="burger-return-icon">
               <CloseIcon color="white" fontSize={16} />
          </Link>
      ) : (
        showBurgerIcon && (
          <Link to={MENU_PATH} className="burger-return-icon">
              <BurgerIcon color="white" fontSize={16} />
          </Link>
        )
      )}
      {showThemeToggle && (
        <LightDarkTheme>
          <SwitchThemeIcon color="white" fontSize={16} />
        </LightDarkTheme>
      )}
    </header>
  );
};