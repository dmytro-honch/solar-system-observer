import { useEffect, useRef } from 'react';

import { initObserver } from 'src/utils/planetObserver/init';
import { displayModes } from 'src/constants';

export const usePlanetObserver = () => {
  const date = new Date();
  const scale = 1;
  const angleX = 0;
  const angleY = 0;
  const displayMode = displayModes[0];

  const ref = useRef<HTMLCanvasElement>(null);
  const renderRef = useRef<boolean>(false);

  useEffect(() => {
    if (!renderRef.current) {
      renderRef.current = true;
      initObserver(ref.current, scale, angleY, angleX, displayMode, date).then(() => {
        console.log('got res');
      });
    }
  }, []);

  return {
    ref,
  };
};
