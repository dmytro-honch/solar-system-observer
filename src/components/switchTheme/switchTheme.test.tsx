import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SwitchTheme } from 'src/components/switchTheme/switchTheme';
import { useTheme } from 'src/components/switchTheme/useThemeContext';
import { useSelector } from 'react-redux';
import { selectMenu } from 'src/store/selectors/menuButton';

vi.mock('src/components/switchTheme/useSwitchTheme', () => ({
  useTheme: vi.fn(),
}));

vi.mock('src/components/_common/iconicButton/iconicButton', () => ({
  IconicButton: (props: any) => <button onClick={props.onClickHandler}>{props.children}</button>,
}));

vi.mock('src/components/_common/icons/switchThemeIcon', () => ({
  SwitchThemeIcon: () => <span>Switch Theme Icon</span>,
}));

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
}));

describe('SwitchTheme Component', () => {
  it('should render SwitchThemeIcon inside IconicButton when menu is active', () => {
    (vi.mocked(useSelector) as unknown as jest.MockedFunction<typeof useSelector>).mockImplementation(
      (selector: any) => selector === selectMenu && true,
    );

    (vi.mocked(useTheme) as unknown as jest.MockedFunction<typeof useTheme>).mockReturnValue({
      theme: 'light',
      toggleTheme: vi.fn(),
    });

    render(<SwitchTheme />);

    expect(screen.getByText('Switch Theme Icon')).toBeInTheDocument();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const { toggleTheme } = useTheme();
    expect(toggleTheme).toHaveBeenCalled();
  });

  it('should not render anything when menu is not active', () => {
    (vi.mocked(useSelector) as unknown as jest.MockedFunction<typeof useSelector>).mockImplementation(
      (selector: any) => selector === selectMenu && false,
    );

    render(<SwitchTheme />);

    expect(screen.queryByText('Switch Theme Icon')).not.toBeInTheDocument();
  });
});
