import ReactDOM from 'react-dom';
import { ABOUT_US_PATH, CONTACT_US_PATH, PLANET_OBSERVER_PATH } from 'src/features/router/path';
import { Menu } from 'src/components/menu/menu.tsx';

import './menu.css';

export const links = [
  { path: PLANET_OBSERVER_PATH, label: 'Planet Observer' },
  { path: ABOUT_US_PATH, label: 'About Us' },
  { path: CONTACT_US_PATH, label: 'Contact Us' },
  { path: '/unlivable_url', label: 'Page404' },
];

type MenuProps = {
  onClose: () => void;
};

export const MenuDisplay: React.FC<MenuProps> = ({ onClose }) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    console.error('The element with id "modal-root" does not exist in the DOM.');
    return null;
  }

  return ReactDOM.createPortal(<Menu clickOnMenu={onClose} />, modalRoot);
};
