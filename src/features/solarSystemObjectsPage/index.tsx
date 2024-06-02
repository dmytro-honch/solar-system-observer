import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/router/path';

import { Header } from 'src/components/header/header.tsx';

const SolarSystemObjectsPage = () => (
  <>
    <Header showThemeToggle={false} />
    <ul>
      <li>
        <Link to={PLANET_OBSERVER_PATH}>Planet Observer</Link>
      </li>
    </ul>
  </>
);

export default SolarSystemObjectsPage;
