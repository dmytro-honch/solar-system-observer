import { Header } from 'src/components/header/header.tsx';
import { Contacts } from 'src/components/contacts/contacts.tsx';

const ContactUsPage = () => (
  <>
    <Header showThemeToggle={false} showMenu={true} />
    <Contacts />
  </>
);

export default ContactUsPage;
