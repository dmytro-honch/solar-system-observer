import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { ABOUT_US_PATH, CONTACT_US_PATH, HISTORY_OBSERVER_PATH } from 'src/features/router/path';
import { Menu } from 'src/components/menu/menu';

import './menu.css';

export const links = [
  { path: HISTORY_OBSERVER_PATH, label: 'Planet Observer' },
  { path: ABOUT_US_PATH, label: 'About Us' },
  { path: CONTACT_US_PATH, label: 'Contact Us' },
  { path: '/unlivable_url', label: 'Page404' },
];

type MenuProps = {
  onClose: () => void;
};

export const Portal = ({ onClose }: MenuProps) => {
  const portalNode = useRef(document.createElement('div'));

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root');
    portalRoot?.appendChild(portalNode.current);

    return () => {
      portalRoot?.removeChild(portalNode.current);
    };
  }, []);

  return ReactDOM.createPortal(<Menu clickOnMenu={onClose} />, portalNode.current);
};
