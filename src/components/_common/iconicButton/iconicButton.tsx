import { MouseEventHandler, ReactNode } from 'react';

import './iconicButton.css';

type IconicButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const IconicButton = ({ onClickHandler, children }: IconicButtonProps) => (
  <button type="button" className="header-buttons switch-theme-button" onClick={onClickHandler}>
    {children}
  </button>
);
