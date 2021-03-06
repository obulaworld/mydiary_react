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
import Profile from '../containers/Profile/Profile';
import CreateEntry from '../containers/CreateEntry/CreateEntry';
import Logout from './Logout/Logout';
import ViewEntry from '../containers/ViewEntry/ViewEntry';
import EditEntry from '../containers/EditEntry/EditEntry';

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
      <Route exact path='/view-entry' component={ViewEntry} />
      <AuthenticatedRoute exact path='/profile' component={Profile} />
      <AuthenticatedRoute exact path='/entry-add' component={CreateEntry} />
      <AuthenticatedRoute exact path='/edit-entry' component={EditEntry} />
      <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
 export default Routes;
