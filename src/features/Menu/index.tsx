import { Link } from 'react-router-dom';


import { LightDarkTheme } from 'src/components/LightDarkTheme/LightDarkTheme';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';
import { CONTACT_US_PATH } from 'src/features/Router/path';
import { ABOUT_US_PATH } from 'src/features/Router/path';
import { SOLAR_SYSTEM_PATH } from 'src/features/Router/path';
import { PROPOSE_CHANGES_PATH } from 'src/features/Router/path';
import { SAY_THANKS_PATH } from 'src/features/Router/path';

import { PageHeader } from 'src/components/PageHeader/PageHeader';
import { BurgerIcon } from 'src/components/_common/icons/BurgerIcon'

const MenuPage = () => {
  
  const burgerIconProps = {
    color: '',
    fontSize: 20,
  };

  return (
    <>
    <LightDarkTheme />
    <PageHeader>
        <BurgerIcon {...burgerIconProps}/>
    </PageHeader>
    <ul>
      <li>
        <Link to={PLANET_OBSERVER_PATH}>Planet Observer</Link>
      </li>
      <li>
        <Link to={SOLAR_SYSTEM_PATH}>Solar System objects</Link>
      </li>
      <li>
        <Link to={ABOUT_US_PATH}>About us</Link>
      </li>
      <li>
        <a href={PROPOSE_CHANGES_PATH} target="_blank">Propose changes</a>
      </li>
      <li>
        <a href={SAY_THANKS_PATH} target="_blank">Say thanks</a>
      </li>
      <li>
        <Link to={CONTACT_US_PATH}>Contact us</Link>
      </li>
      <li>
        <Link to={'/unlivable_url'}>404</Link>
      </li>
    </ul>
    </>
  );
};


export default MenuPage;
