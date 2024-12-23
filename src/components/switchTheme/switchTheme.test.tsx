import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { SwitchTheme } from './switchTheme';
import { useTheme } from './hook';
import { ThemeContextProvider } from './useThemeContext';
import { vi } from 'vitest';

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
}));

vi.mock('./hook', () => ({
  useTheme: vi.fn(),
}));

describe('SwitchTheme Component', () => {
  it('should render SwitchThemeIcon inside IconicButton when menu is active', () => {
    (vi.mocked(useTheme) as unknown as jest.MockedFunction<typeof useTheme>).mockReturnValue({
      theme: 'light',
      toggleTheme: vi.fn(),
    });
    (vi.mocked(useSelector) as unknown as jest.MockedFunction<typeof useSelector>).mockReturnValue(true);

    const { getByRole } = render(
      <ThemeContextProvider>
        <SwitchTheme />
      </ThemeContextProvider>,
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should not render anything when menu is not active', () => {
    (vi.mocked(useTheme) as unknown as jest.MockedFunction<typeof useTheme>).mockReturnValue({
      theme: 'light',
      toggleTheme: vi.fn(),
    });
    (vi.mocked(useSelector) as unknown as jest.MockedFunction<typeof useSelector>).mockReturnValue(false);

    const { queryByRole } = render(
      <ThemeContextProvider>
        <SwitchTheme />
      </ThemeContextProvider>,
    );

    const button = queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
});
