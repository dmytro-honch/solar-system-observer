import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HistoryPage from 'src/features/historyPage';

describe('HistoryPage', () => {
  it('renders the HistoryObserver component', () => {
    render(<HistoryPage />);

    expect(screen.getByTestId('history-observer')).toBeInTheDocument();
  });
});
