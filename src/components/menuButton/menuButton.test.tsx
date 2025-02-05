import { fireEvent, render, screen } from '@testing-library/react';
import { MenuButton } from './menuButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, openMenu } from 'src/store/slices/menuButton';
import { Mock, vi } from 'vitest';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
}));

vi.mock('src/components/menu/portal', () => ({
  Portal: ({ onClose }: { onClose: () => void }) => (
    <div>
      <button onClick={onClose}>Close Menu</button>
    </div>
  ),
}));

describe('MenuButton Component', () => {
  const mockDispatch = vi.fn();
  const mockNavigate = vi.fn();
  const mockLocation = {
    pathname: '/test',
    state: {},
  };

  beforeEach(() => {
    (useDispatch as unknown as Mock).mockReturnValue(mockDispatch);
    (useNavigate as unknown as Mock).mockReturnValue(mockNavigate);
    (useLocation as unknown as Mock).mockReturnValue(mockLocation);
    (useSelector as unknown as Mock).mockReturnValue(false);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders BurgerIcon when menu is closed', () => {
    render(<MenuButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('opens menu and navigates when button is clicked', () => {
    render(<MenuButton />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockDispatch).toHaveBeenCalledWith(openMenu());
    expect(mockNavigate).toHaveBeenCalledWith(mockLocation.pathname, {
      state: { modal: true },
    });
  });

  test('closes menu and navigates back when menu is open', () => {
    (useSelector as unknown as Mock).mockReturnValue(true);
    render(<MenuButton />);

    fireEvent.click(screen.getByRole('button', { name: 'Close Menu' }));

    expect(mockDispatch).toHaveBeenCalledWith(closeMenu());
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('closes menu if location state does not contain modal', () => {
    mockLocation.state = {}; // No modal state
    render(<MenuButton />);

    expect(mockDispatch).toHaveBeenCalledWith(closeMenu());
  });

  test('does not close menu if location state contains modal', () => {
    mockLocation.state = { modal: true };
    render(<MenuButton />);

    expect(mockDispatch).not.toHaveBeenCalledWith(closeMenu());
  });
});
