// react library
import React from 'react';

 // third party library
import { Switch, Route, Router  } from 'react-router-dom';
import history from '../history';

 // components
import AuthenticatedRoute from './AuthRoute';
import Home from './Home/Home';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import View from './View';
import Signup from '../containers/Signup/Signup';


/**
 * @desc handles routing
 * @returns {object} routes
 */
const Routes = () => (
  <Router history={ history }>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/hi/:id' component={View} />
      <Route exact path='/register' component={Signup} />
      <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
 export default Routes;
