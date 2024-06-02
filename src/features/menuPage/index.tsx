import { Header } from 'src/components/header/header.tsx';
import { Menu } from 'src/components/menu/menu.tsx';

const MenuPage = () => (
  <>
    <Header showThemeToggle={true} showMenu={false} />
    <Menu />
  </>
);

export default MenuPage;
