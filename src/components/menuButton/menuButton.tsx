import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BurgerIcon } from 'src/components/_common/icons/burgerIcon.tsx';
import { Menu } from 'src/components/menu/menu.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from 'src/store/selectors/menuButton.ts';
import { closeMenu, openMenu } from 'src/store/slices/menuButton.ts';

import 'src/components/_common/iconicButton/iconicButton.css';

export const MenuButton = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector(selectMenu);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    if (showMenu) {
      dispatch(closeMenu());
      navigate(-1);
    } else {
      dispatch(openMenu());
      navigate(location.pathname, {
        state: { ...location.state, modal: true },
      });
    }
  };

  useEffect(() => {
    if (!location.state?.modal) {
      dispatch(closeMenu());
    }
  }, [location, dispatch]);

  return (
    <>
      {!showMenu && (
        <button onClick={handleToggleMenu} className="header-buttons">
          <BurgerIcon />
        </button>
      )}
      {showMenu && <Menu onClose={handleToggleMenu} />}
    </>
  );
};
