import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BurgerIcon } from 'src/components/_common/icons/burgerIcon';
import { Portal } from 'src/components/menu/portal';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from 'src/store/selectors/menuButton';
import { closeMenu, openMenu } from 'src/store/slices/menuButton';

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
        <button
          onClick={handleToggleMenu}
          className="hover:text-[var(--primary-text-color)] p-[6px] rounded-full leading-[1] text-icon-font-size bg-[var(--primary-element-color)]"
        >
          <BurgerIcon />
        </button>
      )}
      {showMenu && <Portal onClose={handleToggleMenu} />}
    </>
  );
};
