import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import {
  increment,
  decrement,
  fetchExampleDataRequest,
} from '@/app/slices/exampleSlice';
import MainLayout from '@/components/templates/main-layout/main-layout';

import './__app.css';

const App = () => {
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

  const navItems = [
    { id: '1', label: 'Home' },
    { id: '2', label: 'About' },
    { id: '3', label: 'Contact' },
  ];
  const headerTitle = 'MyApp';
  const footerText = '© 2024 MyApp. All rights reserved.';

  return (
    <MainLayout
      headerTitle={headerTitle}
      navItems={navItems}
      footerText={footerText}
    >
      <div className="app-content">
        <h1>Welcome to MyApp</h1>
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
        <div className="counter-section">
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
        <div className="async-data-section">
          <h2>Async Data:</h2>
          {status === 'loading' && <p>Loading...</p>}
          {status === 'succeeded' && <pre>{JSON.stringify(data, null, 2)}</pre>}
          {status === 'failed' && <p>Error: {error}</p>}
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
