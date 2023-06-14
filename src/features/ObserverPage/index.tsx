import { Example } from 'src/components/example/Example.tsx';
import { PlanetObserver } from 'src/components/planetObserver/PlanetObserver.tsx';
import { displayModes } from 'src/constants/planetObserver.ts';

const ObserverPage = () => {
  const date = new Date();
  const scale = 1;
  const angleX = 0;
  const angleY = 0;
  const displayMode = displayModes[0];

  return (
    <>
      <Example />
      <PlanetObserver date={date} angleX={angleX} angleY={angleY} displayMode={displayMode} scale={scale} />
    </>
  );
};

export default ObserverPage;
