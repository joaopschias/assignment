import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Box, Typography } from '@mui/material';
import './login-form.component.scss';

const propTypes = {
  token: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const LoginForm = ({ token = null, error = null, loading, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (error) {
      setMessage('Invalid credentials, please try again.');
    } else if (token) {
      setMessage('Login successful!');
    } else {
      setMessage('');
    }
  }, [error, token]);

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="login-form">
      <Typography variant="h4" gutterBottom className="login-form-title">
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
        className="login-form-input"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
        className="login-form-input"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        className="login-form-button"
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      {message && (
        <Typography
          className="login-form-message"
          color={message === 'Login successful!' ? 'primary' : 'error'}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

LoginForm.propTypes = propTypes;

export default LoginForm;
