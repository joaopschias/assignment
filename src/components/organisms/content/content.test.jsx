import { render, screen } from '@testing-library/react';
import Content from './content';

test('renders Content component', () => {
  render(<Content>Test Content</Content>);
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});
