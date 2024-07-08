import { Container, Box, CssBaseline, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import './auth-layout.component.scss';

const AuthLayout = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="auth-layout">
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthLayout;
