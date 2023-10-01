import { Header } from 'src/components/Header/Header';
import { Menu } from 'src/components/Menu/Menu';

const MenuPage = () => {
  return (
    <>
      <Header showThemeToggle={true} isMenuActive={true} />
      <Menu />
    </>
  );
};

export default MenuPage;
