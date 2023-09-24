import { Link } from 'react-router-dom';

import {
  PLANET_OBSERVER_PATH,
  CONTACT_US_PATH,
  ABOUT_US_PATH,
  SOLAR_SYSTEM_PATH,
  PROPOSE_CHANGES_PATH,
  SAY_THANKS_PATH,
} from 'src/features/Router/path';

import './menu.css';

const links = [
  { path: PLANET_OBSERVER_PATH, label: 'Planet Observer' },
  { path: SOLAR_SYSTEM_PATH, label: 'Solar System objects' },
  { path: ABOUT_US_PATH, label: 'About Us' },
  { path: PROPOSE_CHANGES_PATH, label: 'Propose changes', external: true },
  { path: SAY_THANKS_PATH, label: 'Say thanks', external: true },
  { path: CONTACT_US_PATH, label: 'Contact us' },
  { path: '/unlivable_url', label: '404' },
];

export const Menu = () => {
  return (
    <ul className="menu-page">
      {links.map((link, index) => (
        <li key={index}>
          {link.external ? (
            <a className="menu-links" href={link.path} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ) : (
            <Link to={link.path} className="menu-links">
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
