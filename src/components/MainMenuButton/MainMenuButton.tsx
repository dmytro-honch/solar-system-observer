import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH, MENU_PATH } from 'src/features/Router/path';
import { CloseIcon } from 'src/components/_common/icons/CloseIcon';
import { BurgerIcon } from 'src/components/_common/icons/BurgerIcon';

type MainMenuButtonProps = {
  color: string;
  fontSize: number;
  isMenuToggleActive: boolean;
};

export const MainMenuButton = ({ color, fontSize, isMenuToggleActive }: MainMenuButtonProps) => {
  return (
    <Link to={isMenuToggleActive ? PLANET_OBSERVER_PATH : MENU_PATH} className="menu-button">
      {isMenuToggleActive ? (
        <CloseIcon color={color} fontSize={fontSize} />
      ) : (
        <BurgerIcon color={color} fontSize={fontSize} />
      )}
    </Link>
  );
};
