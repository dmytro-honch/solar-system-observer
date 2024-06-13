import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { ABOUT_US_PATH, CONTACT_US_PATH, PLANET_OBSERVER_PATH } from 'src/features/router/path';
import { BackArrow } from 'src/components/_common/icons/backArrow.tsx';
import { SwitchTheme } from 'src/components/switchTheme/switchTheme.tsx';

import './menu.css';

const links = [
  { path: PLANET_OBSERVER_PATH, label: 'Planet Observer' },
  { path: ABOUT_US_PATH, label: 'About Us' },
  { path: CONTACT_US_PATH, label: 'Contact Us' },
  { path: '/unlivable_url', label: 'Page404' },
];

type MenuProps = {
  onClose: () => void;
};

export const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    console.error('The element with id "modal-root" does not exist in the DOM.');
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <button className="header-buttons menu-close-button" onClick={onClose}>
        <BackArrow />
      </button>
      <SwitchTheme />
      <div className="menu-modal">
        <div className="menu-content">
          <ul className="menu-page">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="menu-links">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>,
    modalRoot,
  );
};
