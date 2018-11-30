// react library
import React from 'react';

 // third party library
import { Switch, Route, BrowserRouter  } from 'react-router-dom';
import history from '../history';

 // components
import AuthenticatedRoute from './AuthRoute';
import Home from './Home/Home';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import View from './View';

/**
 * @desc handles routing
 * @returns {object} routes
 */
const Routes = () => (
  <BrowserRouter history={ history }>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/hi/:id' component={View} />
      <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
 export default Routes;
