import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/pathes';

const Page404 = () => (
  <div>
    <h1>404</h1>
    <Link to={PLANET_OBSERVER_PATH}>Go to home page</Link>
  </div>
);

export default Page404;
