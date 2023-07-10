import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';

import { PageHeader } from 'src/components/PageHeader/PageHeader';
import { BurgerIcon } from 'src/components/_common/icons/BurgerIcon'

const Page404 = () => {

  const burgerIconProps = {
    color: '',
    fontSize: 20,
  };

  return (
    <>
    <PageHeader>
      <BurgerIcon {...burgerIconProps}/>
    </PageHeader>
      <div>
        <h1>404</h1>
        <Link to={PLANET_OBSERVER_PATH}>Go to home page</Link>
      </div>
    </>
  );
};

export default Page404;