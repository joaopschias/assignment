import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HomePage from './home-page.component';

// Mock the MainLayout component
vi.mock('@/components/templates/main-layout/main-layout.component', () => ({
  default: ({ children }) => <div>{children}</div>,
}));

describe('HomePage', () => {
  it('renders the welcome message', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to MyApp')).toBeInTheDocument();
  });

  it('renders the home page content', () => {
    render(<HomePage />);
    expect(
      screen.getByText('This is the home page content.'),
    ).toBeInTheDocument();
  });
});
