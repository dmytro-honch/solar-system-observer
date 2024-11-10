import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconicButton } from './iconicButton';
import { SwitchThemeIcon } from 'src/components/_common/icons/switchThemeIcon';

describe('IconicButton component', () => {
  it('renders correctly with SwitchThemeIcon as children', () => {
    render(
      <IconicButton onClickHandler={() => {}}>
        <SwitchThemeIcon />
      </IconicButton>,
    );

    const button = screen.getByTestId('iconic-button');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('calls onClickHandler when clicked', () => {
    const onClickHandler = vi.fn();
    render(
      <IconicButton onClickHandler={onClickHandler}>
        <SwitchThemeIcon />
      </IconicButton>,
    );

    const button = screen.getByTestId('iconic-button');
    fireEvent.click(button);

    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
