import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  fetchExampleDataRequest,
} from './app/slices/exampleSlice';
import logo from './logo.svg';
import './__app.css';

const app = () => {
  const count = useSelector(state => state.example.value);
  const data = useSelector(state => state.example.data);
  const status = useSelector(state => state.example.status);
  const error = useSelector(state => state.example.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchExampleDataRequest());
    }
  }, [status, dispatch]);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
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
          <h1>Count: {count}</h1>
          <Button
            onClick={() => dispatch(increment())}
            variant="contained"
            color="primary"
          >
            Increment
          </Button>
          <Button
            onClick={() => dispatch(decrement())}
            variant="contained"
            color="secondary"
          >
            Decrement
          </Button>
        </div>
        <div>
          <h2>Async Data:</h2>
          {status === 'loading' && <p>Loading...</p>}
          {status === 'succeeded' && <pre>{JSON.stringify(data, null, 2)}</pre>}
          {status === 'failed' && <p>Error: {error}</p>}
        </div>
      </header>
    </div>
  );
};

export default app;
