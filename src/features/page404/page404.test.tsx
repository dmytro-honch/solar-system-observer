import { render, screen } from '@testing-library/react';
import { Fixture } from './page404.stories';

describe('Page404', () => {
  it('renders Page404', () => {
    render(<Fixture />);

    expect(screen.getByRole('heading', { name: /^404$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go to home page/i })).toHaveAttribute('href', '/');
  });
});
