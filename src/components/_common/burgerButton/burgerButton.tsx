import { Link } from 'react-router-dom';

import { PLANET_OBSERVER_PATH, MENU_PATH } from 'src/features/router/path';
import { BackArrow } from 'src/components/_common/icons/backArrow.tsx';
import { BurgerIcon } from 'src/components/_common/icons/burgerIcon.tsx';

import 'src/components/_common/iconicButton/iconicButton.css';

type BurgerButtonProps = {
  isMenuToggleActive: boolean;
};

export const BurgerButton = ({ isMenuToggleActive }: BurgerButtonProps) => (
  <Link to={isMenuToggleActive ? MENU_PATH : PLANET_OBSERVER_PATH} className="header-buttons">
    {isMenuToggleActive ? <BurgerIcon /> : <BackArrow />}
  </Link>
);
