'use strict';

import Maps from './Maps';
import React from 'react';
import Router from 'react-router';
var Route = Router.Route;

var content = document.getElementById('container');

var Routes = (
  <Route handler={Maps}>
    <Route name="/" handler={Maps}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
