import MainLayout from '@/components/templates/main-layout/main-layout.component';
import LoginForm from '@/components/organisms/login-form/login-form.component';

import './__app.css';

const App = () => {
  const navItems = [
    { id: '1', label: 'Home' },
    { id: '2', label: 'About' },
    { id: '3', label: 'Contact' },
  ];
  const headerTitle = 'MyApp';
  const footerText = '© 2024 MyApp. All rights reserved.';

  return (
    <MainLayout
      headerTitle={headerTitle}
      navItems={navItems}
      footerText={footerText}
    >
      <div className="app-content">
        <LoginForm />
      </div>
    </MainLayout>
  );
};

export default App;
