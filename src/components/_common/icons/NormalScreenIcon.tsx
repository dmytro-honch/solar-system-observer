import { IconProps } from 'src/components/_common/icons/types';

export const NormalScreenIcon = ({ color, fontSize }: IconProps) => (
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
    <path d="M11 6.5L11 11M11 11L6.5 11M11 11L4 4" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 21.5L17 17M17 17L21.5 17M17 17L24 24" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
    <path d="M21.5 11L17 11M17 11L17 6.5M17 11L24 4" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
    <path d="M6.5 17L11 17M11 17L11 21.5M11 17L4 24" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
