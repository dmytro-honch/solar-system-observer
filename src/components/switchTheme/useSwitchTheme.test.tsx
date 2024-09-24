import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeContextProvider } from 'src/components/switchTheme/useThemeContext';
import { useTheme } from 'src/components/switchTheme/hook';

describe('useTheme Hook', () => {
  it('should toggle theme correctly', () => {
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('light');
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeContextProvider>{children}</ThemeContextProvider>,
    });

    expect(result.current.theme).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });

    expect(setItemSpy).toHaveBeenCalledWith('theme', 'dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
  });
});
