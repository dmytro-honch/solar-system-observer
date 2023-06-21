import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from '../Router/pathes';
import { LightDarkThemeToggle } from 'src/components/lightDarkTheme/LightDarkTheme';

const MenuPage = () => (
  <>
  <div><LightDarkThemeToggle /></div>
  <ul>
    <li>
      <Link to={PLANET_OBSERVER_PATH}>Planet Observer</Link>
    </li>
    <li>
      <Link to={'/unlivable_url'}>404</Link>
    </li>
  </ul>
  </>
);

export default MenuPage;
