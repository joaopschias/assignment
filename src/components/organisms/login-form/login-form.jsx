import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Box, Typography } from '@mui/material';
import { loginRequest } from '@/app/slices/authSlice';
import './login-form.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { token, error, loading } = useSelector(state => state.auth);
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
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
        onChange={e => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        className="login-form-input"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
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
          color={token ? 'primary' : 'error'}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoginForm;
