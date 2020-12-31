import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import {LandingPage, ErrorPage} from './pages';

import './App.css';

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
