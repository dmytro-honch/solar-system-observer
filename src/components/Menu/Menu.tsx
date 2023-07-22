import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';
import { CONTACT_US_PATH } from 'src/features/Router/path';
import { ABOUT_US_PATH } from 'src/features/Router/path';
import { SOLAR_SYSTEM_PATH } from 'src/features/Router/path';
import { PROPOSE_CHANGES_PATH } from 'src/features/Router/path';
import { SAY_THANKS_PATH } from 'src/features/Router/path';

import './menu.css';

export const Menu = () => {
  return (
    <ul className="menu-page">
      <li>
        <Link to={PLANET_OBSERVER_PATH} className="menu-links">
          Planet Observer
        </Link>
      </li>
      <li>
        <Link to={SOLAR_SYSTEM_PATH} className="menu-links">
          Solar System objects
        </Link>
      </li>
      <li>
        <Link to={ABOUT_US_PATH} className="menu-links">
          About us
        </Link>
      </li>
      <li>
        <a className="menu-links" href={PROPOSE_CHANGES_PATH} target="_blank" rel="noopener noreferrer">
          Propose changes
        </a>
      </li>
      <li>
        <a className="menu-links" href={SAY_THANKS_PATH} target="_blank" rel="noopener noreferrer">
          Say thanks
        </a>
      </li>
      <li>
        <Link to={CONTACT_US_PATH} className="menu-links">
          Contact us
        </Link>
      </li>
      <li>
        <Link to="/unlivable_url" className="menu-links">
          404
        </Link>
      </li>
    </ul>
  );
};
