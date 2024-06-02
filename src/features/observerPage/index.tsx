import { PlanetObserver } from 'src/components/planetObserver/planetObserver.tsx';
import { displayModes } from 'src/constants';

import { Header } from 'src/components/header/header.tsx';

const ObserverPage = () => {
  const date = new Date();
  const scale = 1;
  const angleX = 0;
  const angleY = 0;
  const displayMode = displayModes[0];

  return (
    <>
      <Header showMenu={true} />
      <PlanetObserver date={date} angleX={angleX} angleY={angleY} displayMode={displayMode} scale={scale} />
    </>
  );
};

export default ObserverPage;
