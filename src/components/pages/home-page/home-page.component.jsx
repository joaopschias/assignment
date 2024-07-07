import MainLayout from '@/components/templates/main-layout/main-layout.component';

import './home-page.component.scss';

const HomePage = () => {
  const navItems = ['Home', 'About', 'Contact'];
  const headerTitle = 'MyApp';
  const footerText = '© 2024 MyApp. All rights reserved.';

  return (
    <MainLayout
      headerTitle={headerTitle}
      navItems={navItems}
      footerText={footerText}
    >
      <div className="home-page">
        <h1>Welcome to MyApp</h1>
        <p>This is the home page content.</p>
      </div>
    </MainLayout>
  );
};

export default HomePage;
