import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { THEMES, useSwitchTheme } from 'src/components/switchTheme/hook';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'src/store/slices/switchTheme';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

const mockDispatch = vi.fn();
const mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;

(useDispatch as jest.MockedFunction<typeof useDispatch>).mockReturnValue(mockDispatch);

describe('useSwitchTheme Hook', () => {
  it('should toggle theme and dispatch toggleTheme action', () => {
    mockUseSelector.mockReturnValue(THEMES.light);

    const { result } = renderHook(() => useSwitchTheme());

    act(() => {
      result.current();
    });

    expect(mockDispatch).toHaveBeenCalledWith(toggleTheme(THEMES.dark));
  });

  it('should apply theme styles on theme change', () => {
    mockUseSelector.mockReturnValue(THEMES.light);

    const { result } = renderHook(() => useSwitchTheme());

    act(() => {
      result.current();
    });

    expect(document.body.getAttribute('data-theme')).toBe(THEMES.dark);
  });
});
