import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Play from './Play';
import Search from './Search';

const route = (path, Component) => (
  <Route exact path={path} component={Component} />
);

function Routes() {
  return (
    <Switch>
      {route('/', Home)}
      {route('/play', Play)}
      {route('/search', Search)}
    </Switch>
  );
}

export default Routes;
