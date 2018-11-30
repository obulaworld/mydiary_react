// react library
import React from 'react';

 // third party library
import { Switch, Route, Router  } from 'react-router-dom';
import history from '../history';

 // components
import AuthenticatedRoute from './AuthRoute';
import Home from './Home/Home';
import Dashboard from '../containers/Dashboard/Dashboard';
import NotFound from './NotFound';
import View from './View';
import Signup from '../containers/Signup/Signup';
import Login from '../containers/Login/Login';
import Logout from './Logout/Logout';

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
      <Route exact path='/login' component={Login} />
      <Route exact path='/logout' component={Logout} />
      <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
 export default Routes;
