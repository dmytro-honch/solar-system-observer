import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactUsPage from 'src/features/contactUsPage';

describe('ContactUsPage', () => {
  it('renders the Contacts component', () => {
    render(<ContactUsPage />);

    expect(screen.getByPlaceholderText(/Your name \(optional\)/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/How to contact \(optional\)/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your message to us/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
  });
});
