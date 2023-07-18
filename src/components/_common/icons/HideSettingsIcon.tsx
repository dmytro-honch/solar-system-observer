type IconProps = {
  color: string;
  fontSize: number;
};

export const HideSettingsIcon = ({ color, fontSize }: IconProps) => (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 28 28" 
      fill="none"
      style={{ fontSize, color, width: '1em', height: 'auto' }} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{'path { stroke: currentColor; stroke-width: 2; stroke-linecap: round; }'}</style>
      </defs>
      <path d="M24 4L4 24" stroke="#CDCDCD" stroke-width="2" stroke-linecap="round"/>
      <path d="M19 5.05024L18 6H16V3H12V6L9.94975 7.17156L7.82843 5.05024L5 7.87866L7.12132 9.99998L6 12H3V16H6V18L5 19M23 9L22 9.99998V12H25V16H22L20.8787 18L23 20.1213L20.1716 22.9498L18.0503 20.8284L16 22V25H12V22H9.94975L9 23" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

