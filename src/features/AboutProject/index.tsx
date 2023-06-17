import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';

const AboutProject = () => {
  return (
    <ul>
      <li>
        <Link to={PLANET_OBSERVER_PATH}>Planet Observer</Link>
      </li>
    </ul>
  );
};

export default AboutProject;
