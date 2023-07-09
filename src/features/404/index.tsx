import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { BurgerIcon } from '../../components/_common/icons/BurgerIcon'

const Page404 = () => {
  return (
    <>
    <PageHeader>
      <BurgerIcon />
    </PageHeader>
      <div>
        <h1>404</h1>
        <Link to={PLANET_OBSERVER_PATH}>Go to home page</Link>
      </div>
    </>
  );
};

export default Page404;
