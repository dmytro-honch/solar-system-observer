import { Link } from 'react-router-dom';
import { PLANET_OBSERVER_PATH } from 'src/features/Router/path';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { BurgerIcon } from '../../components/_common/icons/BurgerIcon'


const ContactUs = () => {
  
  return (
    <>
    <PageHeader>
      <BurgerIcon />
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
