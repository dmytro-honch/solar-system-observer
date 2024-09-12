import { MouseEventHandler, ReactNode } from 'react';

type IconicButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const IconicButton = ({ onClickHandler, children }: IconicButtonProps) => (
  <button
    type="button"
    data-testid="iconic-button"
    className="hover:text-[var(--primary-text-color)] absolute md:top-10 md:right-10 top-5 right-5 cursor-pointer z-[1001] p-[6px] rounded-full leading-[1] text-icon-font-size bg-[var(--primary-element-color)]"
    onClick={onClickHandler}
  >
    {children}
  </button>
);
