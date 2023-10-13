import { Header } from 'src/components/Header/Header';
import { Contact } from 'src/components/Contact/Contact';

const ContactUsPage = () => {
  return (
    <>
      <Header showThemeToggle={false} showMenu={true} />
      <Contact />
    </>
  );
};

export default ContactUsPage;
