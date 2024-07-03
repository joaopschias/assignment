import { render, screen } from '@testing-library/react';
import Header from './header';

const navItems = [
  { id: '1', label: 'Home' },
  { id: '2', label: 'About' },
  { id: '3', label: 'Contact' },
];
const title = 'MyApp';

test('renders Header component', () => {
  render(<Header title={title} navItems={navItems} />);
  expect(screen.getByText('MyApp')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
