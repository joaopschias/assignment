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
        <h1>Welcome to MyApp</h1>
        <p>
          Edit <code>src/app.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
