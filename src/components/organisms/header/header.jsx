import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import './header.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
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
          <Button key={item.id} color="inherit">
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = propTypes;

export default Header;
