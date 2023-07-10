import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';

import { PageHeader } from 'src/components/PageHeader/PageHeader';
import { BurgerIcon } from 'src/components/_common/icons/BurgerIcon'

const ContactUs = () => {
  
  const burgerIconProps = {
    color: '',
    fontSize: 20,
  };

  return (
    <>
    <PageHeader>
      <BurgerIcon {...burgerIconProps}/>
    </PageHeader>
    <ul>
      <li>
        <Link to={PLANET_OBSERVER_PATH}>Planet Observer</Link>
      </li>
    </ul>
    </>
  );
};

export default ContactUs;