import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Portal } from './portal';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { ThemeContext } from 'src/components/switchTheme/useThemeContext';

vi.mock('react-dom', async () => {
  const actual = await vi.importActual<typeof import('react-dom')>('react-dom');
  return {
    ...actual,
    createPortal: (node: React.ReactNode) => node,
  };
});

vi.mock('src/store/selectors/switchTheme', () => ({
  selectTheme: () => ({ theme: 'light' }),
}));

vi.mock('src/store/selectors/menuButton', () => ({
  selectMenu: () => ({ showMenu: true }),
}));

const store = configureStore({
  reducer: {
    switchTheme: (state = { theme: 'light' }) => state,
    menuButton: (state = { showMenu: true }) => state,
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeContextValue = { theme: 'light' };

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

describe('Portal Component', () => {
  let portalRoot: HTMLDivElement;

  beforeEach(() => {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal-root');
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    document.body.removeChild(portalRoot);
  });

  it('renders the Menu component inside the portal-root', () => {
    const onClose = vi.fn();
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Portal onClose={onClose} />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByText('Planet Observer')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('calls onClose when Menu triggers clickOnMenu', () => {
    const onClose = vi.fn();
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Portal onClose={onClose} />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
    );

    const closeButton = screen.getByTestId('close-icon');

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });
});
