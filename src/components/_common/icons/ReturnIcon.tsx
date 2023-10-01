import { IconProps } from 'src/components/_common/icons/types';

export const ReturnIcon = ({ color = 'inherit', size = 'inherit' }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    style={{ fontSize: size, color, width: '1em', height: 'auto' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>{'path { stroke: currentColor; stroke-width: 2; stroke-linecap: round; }'}</style>
    </defs>
    <path d="M3 14L25 14M3 14L10 21M3 14L10 7" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
