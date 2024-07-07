import MainLayout from '@/components/templates/main-layout/main-layout.component';

import './home-page.component.scss';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="home-page">
        <h1>Welcome to MyApp</h1>
        <p>This is the home page content.</p>
      </div>
    </MainLayout>
  );
};

export default HomePage;
