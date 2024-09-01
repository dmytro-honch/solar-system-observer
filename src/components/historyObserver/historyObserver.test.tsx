import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HistoryObserver } from './historyObserver';

describe('HistoryObserver Component', () => {
  it('should render the history observer wrapper', () => {
    render(<HistoryObserver />);

    const wrapper = screen.getByTestId('history-observer-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
