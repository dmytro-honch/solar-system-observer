import { Example } from 'src/components/example/Example';
import { PlanetObserver } from 'src/components/planetObserver/PlanetObserver';
import { displayModes } from 'src/constants';

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
