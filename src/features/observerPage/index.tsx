import { PlanetObserver } from 'src/components/planetObserver/planetObserver.tsx';
import { displayModes } from 'src/constants';

const ObserverPage = () => {
  const date = new Date();
  const scale = 1;
  const angleX = 0;
  const angleY = 0;
  const displayMode = displayModes[0];

  return (
    <>
      <PlanetObserver date={date} angleX={angleX} angleY={angleY} displayMode={displayMode} scale={scale} />
    </>
  );
};

export default ObserverPage;
