import { IconProps } from 'src/components/_common/icons/types';

export const BurgerIcon = ({ color, fontSize }: IconProps) => (
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
    <path d="M4 7H24" />
    <path d="M4 21H20" />
    <path d="M4 14H14" />
  </svg>
);
