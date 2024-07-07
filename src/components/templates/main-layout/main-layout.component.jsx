import PropTypes from 'prop-types';
import Header from '@/components/organisms/header/header.component';
import Footer from '@/components/organisms/footer/footer.component';
import Content from '@/components/organisms/content/content.component';
import './main-layout.component.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  headerTitle: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  footerText: PropTypes.string.isRequired,
};

const MainLayout = ({ children, headerTitle, navItems, footerText }) => {
  return (
    <div className="main-layout">
      <Header title={headerTitle} navItems={navItems} />
      <Content>{children}</Content>
      <Footer text={footerText} />
    </div>
  );
};

MainLayout.propTypes = propTypes;

export default MainLayout;
