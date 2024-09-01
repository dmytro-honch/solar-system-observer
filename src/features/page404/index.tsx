import { Link } from 'react-router-dom';
import { HISTORY_OBSERVER_PATH } from 'src/features/router/path';

const Page404 = () => (
  <>
    <div>
      <h1>404</h1>
      <Link to={HISTORY_OBSERVER_PATH}>Go to home page</Link>
    </div>
  </>
);

export default Page404;
