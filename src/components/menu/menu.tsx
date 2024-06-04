import { Link } from 'react-router-dom';

import { ABOUT_US_PATH, CONTACT_US_PATH, PLANET_OBSERVER_PATH } from 'src/features/router/path';

import './menu.css';

const links = [
  { path: PLANET_OBSERVER_PATH, label: 'Planet Observer' },
  { path: ABOUT_US_PATH, label: 'about Us' },
  { path: CONTACT_US_PATH, label: 'contacts us' },
  { path: '/unlivable_url', label: 'page404' },
];

export const Menu = () => (
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
);
