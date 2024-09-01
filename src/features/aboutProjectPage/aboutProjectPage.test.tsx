import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AboutProjectPage from 'src/features/aboutProjectPage';

describe('AboutProjectPage', () => {
  it('renders the About component', () => {
    render(<AboutProjectPage />);

    expect(screen.getByText(/Welcome to our non-profit project/i)).toBeInTheDocument();
  });
});
