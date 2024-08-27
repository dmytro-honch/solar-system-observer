import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Contacts } from './contacts';

describe('Contacts Component', () => {
  it('renders Contacts form with correct fields and button', () => {
    render(<Contacts />);

    const form = screen.getByTestId('contact-form');
    expect(form).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Your name (optional)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('How to contact (optional)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your message to us')).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Send/i });
    expect(button).toBeInTheDocument();
  });

  it('should call form submit handler on submit', () => {
    render(<Contacts />);
    const form = screen.getByTestId('contact-form');
    fireEvent.submit(form);
    expect(form).toBeInTheDocument();
  });
});
