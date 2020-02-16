import React, { useEffect } from 'react';
import logo from '../logo.svg';
import './App.scss';
import { thunkGetShowsById } from 'src/thunks/shows.thunk';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const id = '6771';

  useEffect(() => {
    dispatch(thunkGetShowsById(id));
  }, [dispatch, id]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
