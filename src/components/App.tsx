import React from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router';
import {DEFAULT_SHOW_ID} from 'src/constants';
import Show from 'src/components/pages/Show/Show';
import Episodes from 'src/components/pages/Episodes/Episodes';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Redirect exact path="/" to={`/show/${DEFAULT_SHOW_ID}`} />
        <Route exact path="/show/:id" component={Show} />
        <Route exact path="/show/:id/episodes" component={Episodes} />
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  );
};

export default App;
