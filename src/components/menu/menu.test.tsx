import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Menu } from './menu';
import { BrowserRouter as Router } from 'react-router-dom';

vi.mock('src/components/switchTheme/switchTheme', () => ({
  SwitchTheme: () => <div data-testid="switch-theme">SwitchTheme</div>,
}));

vi.mock('src/components/_common/icons/closeIcon', () => ({
  CloseIcon: (props: any) => <svg {...props} data-testid="close-icon" />,
}));

describe('Menu Component', () => {
  const clickOnMenu = vi.fn();

  beforeEach(() => {
    clickOnMenu.mockClear();
  });

  it('renders all links correctly', () => {
    const links = [
      { path: '/', label: 'Planet Observer' },
      { path: '/about-us', label: 'About Us' },
      { path: '/contact-us', label: 'Contact Us' },
    ];

    render(
      <Router>
        <Menu clickOnMenu={clickOnMenu} />
      </Router>,
    );

    links.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('calls clickOnMenu when close button is clicked', () => {
    render(
      <Router>
        <Menu clickOnMenu={clickOnMenu} />
      </Router>,
    );

    const closeButton = screen.getByTestId('close-icon');
    fireEvent.click(closeButton);

    expect(clickOnMenu).toHaveBeenCalledTimes(1);
  });

  it('renders SwitchTheme component', () => {
    render(
      <Router>
        <Menu clickOnMenu={clickOnMenu} />
      </Router>,
    );

    expect(screen.getByTestId('switch-theme')).toBeInTheDocument();
  });
});
