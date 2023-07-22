import { IconProps } from 'src/components/_common/icons/types';

export const FullScreenIcon = ({ color, fontSize }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    style={{ fontSize, color, width: '1.2em', height: 'auto' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>{'path { stroke: currentColor; stroke-width: 2; stroke-linecap: round; }'}</style>
    </defs>
    <path d="M4 8.5V4M4 4H8.5M4 4L11 11" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 19.5L24 24M24 24L19.5 24M24 24L17 17" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
    <path d="M19.5 4L24 4M24 4L24 8.5M24 4L17 11" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
    <path d="M8.5 24L4 24M4 24L4 19.5M4 24L11 17" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
