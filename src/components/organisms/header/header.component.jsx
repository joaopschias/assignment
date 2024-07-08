import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './header.component.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onLogout: PropTypes.func.isRequired,
};

const Header = ({ title, navItems, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleClose();
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className="header-toolbar">
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
        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            onClick={handleMenu}
            size="large"
            edge="end"
            color="inherit"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            className="header-icon-button"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{ paper: 'custom-menu-paper' }}
            className="profile-menu"
          >
            <Box
              display="flex"
              alignItems="center"
              p={2}
              className="profile-menu-header"
            >
              <Avatar alt="User" src="/static/images/avatar/1.jpg" />
              <Box ml={2}>
                <Typography variant="body1">Hello John Doe</Typography>
                <Typography variant="body2">john.doe@example.com</Typography>
              </Box>
            </Box>
            <MenuItem onClick={handleClose} className="profile-menu-item">
              My Account
            </MenuItem>
            <MenuItem onClick={handleLogout} className="profile-menu-item">
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = propTypes;

export default Header;
