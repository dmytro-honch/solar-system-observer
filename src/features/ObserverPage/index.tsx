import { Example } from 'src/components/Example/Example';
import { PlanetObserver } from 'src/components/PlanetObserver/PlanetObserver';
import { displayModes } from 'src/constants';

import { Header } from 'src/components/Header/Header';

const ObserverPage = () => {
  const date = new Date();
  const scale = 1;
  const angleX = 0;
  const angleY = 0;
  const displayMode = displayModes[0];

  return (
    <>
      <Header showMenu={true} />
      <Example />
      <PlanetObserver date={date} angleX={angleX} angleY={angleY} displayMode={displayMode} scale={scale} />
    </>
  );
};

export default ObserverPage;
