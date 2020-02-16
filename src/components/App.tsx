import React, { useEffect } from 'react';
import logo from '../logo.svg';
import './App.scss';
import { thunkGetShowById } from 'src/thunks/shows.thunk';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  // 'id' should be as variable with list of shows
  const id = '6771';

  useEffect(() => {
    dispatch(thunkGetShowById(id));
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
