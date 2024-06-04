import { BackArrow } from 'src/components/_common/icons/backArrow.tsx';
import { BurgerIcon } from 'src/components/_common/icons/burgerIcon.tsx';

import 'src/components/_common/iconicButton/iconicButton.css';

type BurgerButtonProps = {
  isMenuToggleActive: boolean;
  onClick: () => void;
};

export const BurgerButton = ({ isMenuToggleActive, onClick }: BurgerButtonProps) => {
  return (
    <button onClick={onClick} className="header-buttons">
      {isMenuToggleActive ? <BackArrow /> : <BurgerIcon />}
    </button>
  );
};
