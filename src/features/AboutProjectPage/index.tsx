import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';

import { Header } from 'src/components/Header/Header';

const AboutProjectPage = () => {
  return (
    <>
      <Header showThemeToggle={false} isMenuToggleActive={true} />
      <ul>
        <li>
          <Link to={PLANET_OBSERVER_PATH}>Planet Observer</Link>
        </li>
      </ul>
    </>
  );
};

export default AboutProjectPage;
