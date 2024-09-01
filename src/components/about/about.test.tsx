import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from './about';

describe('About Component', () => {
  it('renders About section with correct content', () => {
    render(<About />);

    expect(screen.getByText('About')).toBeInTheDocument();

    expect(screen.getByText(/Welcome to our non-profit project/)).toBeInTheDocument();
    expect(screen.getByText(/Our goal is to provide an interactive and educational experience/)).toBeInTheDocument();
    expect(screen.getByText(/To achieve this, we have chosen to employ the WebGPU API/)).toBeInTheDocument();
    expect(screen.getByText(/We are excited to embark on this journey/)).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /List of Solar System objects by size/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/List_of_Solar_System_objects_by_size');
  });
});
