import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SwitchTheme } from 'src/components/switchTheme/switchTheme';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from 'src/store/selectors/menuButton';
import { toggleTheme } from 'src/store/slices/switchTheme';

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

vi.mock('src/components/_common/iconicButton/iconicButton', () => ({
  IconicButton: (props: any) => <button onClick={props.onClickHandler}>{props.children}</button>,
}));

vi.mock('src/components/_common/icons/switchThemeIcon', () => ({
  SwitchThemeIcon: () => <span>Switch Theme Icon</span>,
}));

const mockDispatch = vi.fn();
(vi.mocked(useDispatch) as unknown as jest.MockedFunction<typeof useDispatch>).mockReturnValue(mockDispatch);

describe('SwitchTheme Component', () => {
  it('should render SwitchThemeIcon inside IconicButton when menu is active', () => {
    (vi.mocked(useSelector) as unknown as jest.MockedFunction<typeof useSelector>).mockImplementation(
      (selector: any) => {
        if (selector === selectMenu) return true;
        return null;
      },
    );

    render(<SwitchTheme />);

    expect(screen.getByText('Switch Theme Icon')).toBeInTheDocument();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith(toggleTheme(expect.anything()));
  });

  it('should not render anything when menu is not active', () => {
    (vi.mocked(useSelector) as unknown as jest.MockedFunction<typeof useSelector>).mockImplementation(
      (selector: any) => {
        if (selector === selectMenu) return false;
        return null;
      },
    );

    render(<SwitchTheme />);

    expect(screen.queryByText('Switch Theme Icon')).not.toBeInTheDocument();
  });
});
