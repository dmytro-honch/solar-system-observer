import { usePlanetObserver } from './hook';

import './planetObserver';

type PlanetObserverProps = {
  scale: number;
  angleY: number;
  angleX: number;
  displayMode: string;
  date: Date;
};

export const PlanetObserver = ({ scale, angleY, angleX, displayMode, date }: PlanetObserverProps) => {
  const { ref } = usePlanetObserver(scale, angleY, angleX, displayMode, date);

  return (
    <div className="planet-observer__wrapper">
      <canvas ref={ref} className="planet-observer" id="planet-observer" />
    </div>
  );
};
