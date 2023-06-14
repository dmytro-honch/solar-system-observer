import { useEffect, useRef } from 'react';
import { initObserver } from 'src/utils/planetObserver/init';

export const usePlanetObserver = (scale: number, angleY: number, angleX: number, displayMode: string, date: Date) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    initObserver(ref.current, scale, angleY, angleX, displayMode, date);
  }, [ref.current]);

  return {
    ref,
  };
};
