type IconProps = {
  color: string;
  fontSize: number;
};



export const SwitchThemeIcon = ({ color, fontSize }: IconProps) => (
  <svg 
    width="50" 
    height="50"
    viewBox="0 0 28 28"
    fill="none"
    style={{ fontSize, color, width: '1em', height: 'auto' }} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_104_2)">
    <circle cx="14.3923" cy="14.3923" r="6" fill="#CDCDCD"/>
    <path d="M16.3923 6.39233H12.3923L14.3923 2.39233L16.3923 6.39233Z" fill="#D9D9D9"/>
    <path d="M12.3923 22.3923L16.3923 22.3923L14.3923 26.3923L12.3923 22.3923Z" fill="#D9D9D9"/>
    <path d="M22.3923 16.3923L22.3923 12.3923L26.3923 14.3923L22.3923 16.3923Z" fill="#D9D9D9"/>
    <path d="M6.39233 12.3923L6.39233 16.3923L2.39233 14.3923L6.39233 12.3923Z" fill="#D9D9D9"/>
    <path d="M20.1244 8.4641L16.6603 6.4641L20.3923 4L20.1244 8.4641Z" fill="#D9D9D9"/>
    <path d="M8.66029 20.3206L12.1244 22.3206L8.39234 24.7847L8.66029 20.3206Z" fill="#D9D9D9"/>
    <path d="M20.3206 20.1244L22.3206 16.6603L24.7847 20.3923L20.3206 20.1244Z" fill="#D9D9D9"/>
    <path d="M8.4641 8.66029L6.4641 12.1244L4 8.39234L8.4641 8.66029Z" fill="#D9D9D9"/>
    <path d="M22.3206 12.1244L20.3206 8.66028L24.7847 8.39233L22.3206 12.1244Z" fill="#D9D9D9"/>
    <path d="M6.4641 16.6603L8.4641 20.1244L4 20.3923L6.4641 16.6603Z" fill="#D9D9D9"/>
    <path d="M16.6603 22.3206L20.1244 20.3206L20.3923 24.7847L16.6603 22.3206Z" fill="#D9D9D9"/>
    <path d="M12.1244 6.4641L8.66028 8.4641L8.39233 4L12.1244 6.4641Z" fill="#D9D9D9"/>
    </g>
    <defs>
    <style>{'path { stroke: currentColor; stroke-width: 2; stroke-linecap: round; }'}</style>
    <clipPath id="clip0_104_2">
    <rect width="28" height="28" fill="white"/>
    </clipPath>
    </defs>
  </svg>
);