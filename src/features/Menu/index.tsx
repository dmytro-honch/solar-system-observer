import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from '../Router/pathes.ts';
import { CONTACT_PATH } from '../Router/pathes.ts';
import { ABOUT_PATH } from '../Router/pathes.ts';
import { SOLAR_PATH } from '../Router/pathes.ts';

const MenuPage = () => {
  return (
    <ul>
      <li>
        <Link to={PLANET_OBSERVER_PATH}>Planet Observer</Link>
      </li>
      <li>
        <Link to={SOLAR_PATH}>Solar System objects</Link>
      </li>
      <li>
        <Link to={ABOUT_PATH}>About us</Link>
      </li>
      <li>
        <Link to={CONTACT_PATH}>Contact us</Link>
      </li>
      <li>
        <Link to={'/unlivable_url'}>404</Link>
      </li>
    </ul>
  );
};

export default MenuPage;
