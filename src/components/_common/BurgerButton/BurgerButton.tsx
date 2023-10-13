import { Link } from 'react-router-dom';

import { PLANET_OBSERVER_PATH, MENU_PATH } from 'src/features/Router/path';
import { BackArrow } from 'src/components/_common/icons/BackArrow';
import { BurgerIcon } from 'src/components/_common/icons/BurgerIcon';

import 'src/components/_common/IconicButton/iconicButton.css';

type BurgerButtonProps = {
  isMenuToggleActive: boolean;
};

export const BurgerButton = ({ isMenuToggleActive }: BurgerButtonProps) => {
  return (
    <Link to={isMenuToggleActive ? MENU_PATH : PLANET_OBSERVER_PATH} className="header-buttons">
      {isMenuToggleActive ? <BurgerIcon /> : <BackArrow />}
    </Link>
  );
};
