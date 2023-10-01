import { Header } from 'src/components/Header/Header';
import { Contact } from 'src/components/Contact/Contact';

const ContactUsPage = () => {
  return (
    <>
      <Header showThemeToggle={false} isMenuActive={false} />
      <Contact />
    </>
  );
};

export default ContactUsPage;
