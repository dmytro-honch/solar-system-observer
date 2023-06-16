export function initObserver(
  ref: HTMLCanvasElement | null,
  scale: number,
  angleY: number,
  angleX: number,
  displayMode: string,
  date: Date,
) {
  if (!ref) throw new Error('Canvas element is not found');

  const context = ref.getContext('webgl');
  if (!context) throw new Error('WebGL is not supported');

  return { scale, angleY, angleX, displayMode, date };
}
