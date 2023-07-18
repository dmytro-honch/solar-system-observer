import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';


import { Header } from 'src/components/Header/Header';

const Page404 = () => {

  return (
    <>
    <Header showThemeToggle={false} showBurgerIcon={true}/>
      <div>
        <h1>404</h1>
        <Link to={PLANET_OBSERVER_PATH}>Go to home page</Link>
      </div>
    </>
  );
};

export default Page404;