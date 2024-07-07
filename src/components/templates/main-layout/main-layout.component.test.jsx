import { render, screen } from '@testing-library/react';
import MainLayout from './main-layout.component';

const headerTitle = 'MyApp';
const navItems = [
  { id: '1', label: 'Home' },
  { id: '2', label: 'About' },
  { id: '3', label: 'Contact' },
];
const footerText = '© 2024 MyApp. All rights reserved.';

test('renders MainLayout component', () => {
  render(
    <MainLayout
      headerTitle={headerTitle}
      navItems={navItems}
      footerText={footerText}
    >
      <div>Main Content</div>
    </MainLayout>,
  );

  // Check for header title
  expect(screen.getByText('MyApp')).toBeInTheDocument();

  // Check for navigation items using a more flexible matcher
  navItems.forEach(item => {
    expect(screen.getByText(item.label)).toBeInTheDocument();
  });

  // Check for main content
  expect(screen.getByText('Main Content')).toBeInTheDocument();

  // Check for footer text
  expect(
    screen.getByText('© 2024 MyApp. All rights reserved.'),
  ).toBeInTheDocument();
});
