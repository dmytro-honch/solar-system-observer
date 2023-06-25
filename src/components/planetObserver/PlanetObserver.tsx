import { usePlanetObserver } from './hook';

import './planetObserver.css';

export const PlanetObserver = () => {
  const { ref } = usePlanetObserver();

  return (
    <div className="planet-observer__wrapper">
      <canvas ref={ref} className="planet-observer" id="planet-observer" />
    </div>
  );
};
