import { render, screen } from '@testing-library/react';
import Footer from './footer';

test('renders Footer component', () => {
  render(<Footer text="© 2024 MyApp. All rights reserved." />);
  expect(
    screen.getByText('© 2024 MyApp. All rights reserved.'),
  ).toBeInTheDocument();
});
