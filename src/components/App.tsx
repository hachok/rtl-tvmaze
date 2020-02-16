import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { DEFAULT_SHOW_ID } from 'src/constants';
import Show from 'src/components/pages/Show/Show';
import Episodes from 'src/components/pages/Episodes/Episodes';

const App = () => {
  return (
    <div className="container container--fluid">
      <div className="container__row">
        <div className="container__col-3" />
        <div className="container__col-lg-6">
          <Switch>
            <Redirect exact path="/" to={`/show/${DEFAULT_SHOW_ID}`} />
            <Route exact path="/show/:id" component={Show} />
            <Route exact path="/show/:id/episodes" component={Episodes} />
            <Redirect path="*" to="/" />
          </Switch>
        </div>
        <div className="container__col-3" />
      </div>
    </div>
  );
};

export default App;
