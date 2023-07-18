import { useLocation } from 'react-router-dom';

import { MENU_PATH } from 'src/features/Router/path';

export const useHeader = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === MENU_PATH;

  return {
    isMenuPage,
  };
};