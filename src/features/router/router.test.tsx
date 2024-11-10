import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AboutProjectPage from 'src/features/aboutProjectPage';
import ContactUsPage from 'src/features/contactUsPage';
import HistoryPage from 'src/features/historyPage';
import Page404 from 'src/features/page404';

describe('Router', () => {
  it('renders AboutProjectPage on the About route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <AboutProjectPage />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Welcome to our non-profit project/i)).toBeInTheDocument();
  });

  it('renders ContactUsPage on the Contact route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <ContactUsPage />
      </MemoryRouter>,
    );
    expect(screen.getByPlaceholderText(/Your message to us/i)).toBeInTheDocument();
  });

  it('renders HistoryPage on the History route', () => {
    render(
      <MemoryRouter initialEntries={['/history']}>
        <HistoryPage />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('history-observer')).toBeInTheDocument();
  });

  it('renders 404 page on unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-path']}>
        <Page404 />
      </MemoryRouter>,
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
