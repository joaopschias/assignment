import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './header.component.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const Header = ({ title, navItems }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="header-title">
          {title}
        </Typography>
        {navItems.map(item => (
          <Button
            key={item.path}
            color="inherit"
            component={Link}
            to={item.path}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = propTypes;

export default Header;
