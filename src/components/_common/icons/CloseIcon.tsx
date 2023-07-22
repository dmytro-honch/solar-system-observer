import { IconProps } from 'src/components/_common/icons/types';

export const CloseIcon = ({ color, fontSize }: IconProps) => (
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
    <path d="M6 6L22 22" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 22L22 6" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
