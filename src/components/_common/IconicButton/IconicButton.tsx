import { MouseEventHandler, ReactNode } from 'react';

import './iconicButton.css';

type IconicButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const IconicButton = ({ onClickHandler, children }: IconicButtonProps) => {
  return (
    <button type="button" className="header-buttons" onClick={onClickHandler}>
      {children}
    </button>
  );
};
