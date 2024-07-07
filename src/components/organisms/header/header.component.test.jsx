import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from './header.component';

describe('Header', () => {
  const mockNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
  ];

  it('renders the title', () => {
    render(
      <MemoryRouter>
        <Header title="My App" navItems={mockNavItems} />
      </MemoryRouter>,
    );
    expect(screen.getByText('My App')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(
      <MemoryRouter>
        <Header title="My App" navItems={mockNavItems} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders navigation links correctly', () => {
    render(
      <MemoryRouter>
        <Header title="My App" navItems={mockNavItems} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Login').closest('a')).toHaveAttribute(
      'href',
      '/login',
    );
  });
});
