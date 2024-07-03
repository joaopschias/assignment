import { render, screen } from '@testing-library/react';
import HomePage from './home-page';

test('renders HomePage component', () => {
  render(<HomePage />);

  // Check for header title
  expect(screen.getByText('MyApp')).toBeInTheDocument();
});
