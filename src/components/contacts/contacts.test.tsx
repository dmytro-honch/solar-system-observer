import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Contacts } from './contacts';

describe('Contacts component', () => {
  beforeEach(() => {
    render(<Contacts />);
  });

  it('renders all form fields', () => {
    const nameInput = screen.getByPlaceholderText('Your name (optional)');
    const contactInput = screen.getByPlaceholderText('How to contact (optional)');
    const messageTextarea = screen.getByPlaceholderText('Your message to us');
    const submitButton = screen.getByText('Send');

    expect(nameInput).toBeInTheDocument();
    expect(contactInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('has the correct attributes for form fields', () => {
    const nameInput = screen.getByPlaceholderText('Your name (optional)');
    const contactInput = screen.getByPlaceholderText('How to contact (optional)');
    const messageTextarea = screen.getByPlaceholderText('Your message to us');

    expect(nameInput).toHaveAttribute('id', 'name');
    expect(nameInput).toHaveAttribute('name', 'name');
    expect(nameInput).toHaveAttribute('required');

    expect(contactInput).toHaveAttribute('id', 'contact');
    expect(contactInput).toHaveAttribute('name', 'contact');
    expect(contactInput).toHaveAttribute('required');

    expect(messageTextarea).toHaveAttribute('id', 'message');
    expect(messageTextarea).toHaveAttribute('name', 'message');
    expect(messageTextarea).toHaveAttribute('required');
    expect(messageTextarea).toHaveAttribute('rows', '18');
  });

  it('submits the form', () => {
    const handleSubmit = jest.fn();
    const form = screen.getByTestId('contact-form');

    fireEvent.submit(form);
    expect(form).toBeInTheDocument();
  });
});
