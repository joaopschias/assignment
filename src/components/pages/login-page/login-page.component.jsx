import MainLayout from '@/components/templates/main-layout/main-layout.component';
import LoginForm from '@/components/organisms/login-form/login-form.component';

import './login-page.component.scss';

const propTypes = {};

const LoginPage = () => {
  return (
    <MainLayout>
      <div className="login-page">
        <LoginForm />
      </div>
    </MainLayout>
  );
};

LoginPage.propTypes = propTypes;

export default LoginPage;
