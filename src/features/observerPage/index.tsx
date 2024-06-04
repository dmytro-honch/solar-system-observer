import { useState } from 'react';

import { PlanetObserver } from 'src/components/planetObserver/planetObserver.tsx';
import { displayModes } from 'src/constants';

import { Header } from 'src/components/header/header.tsx';
import { Menu } from 'src/components/menu/menu';

const ObserverPage = () => {
  const date = new Date();
  const scale = 1;
  const angleX = 0;
  const angleY = 0;
  const displayMode = displayModes[0];

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <Header onBurgerClick={toggleMenu} showMenu={isMenuVisible} showThemeToggle={isMenuVisible} />
      {isMenuVisible && <Menu />}
      <PlanetObserver date={date} angleX={angleX} angleY={angleY} displayMode={displayMode} scale={scale} />
    </>
  );
};

export default ObserverPage;
