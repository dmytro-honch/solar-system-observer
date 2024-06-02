import { IconProps } from 'src/components/_common/icons/types';

export const FilterIcon = ({ color = 'inherit', size = 'inherit' }: IconProps) => (
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
    <path
      d="M11.0003 19V13L6.00016 9.00001L6 5L22.0003 5.00001L22.0003 9.00001L17.0003 13V23"
      stroke="#CDCDCD"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
