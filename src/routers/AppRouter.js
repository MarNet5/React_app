import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RecipeDashboardPage from '../components/RecipeDashboardPage';
import AddRecipePage from '../components/AddRecipePage';
import EditRecipePage from '../components/EditRecipePage';
// import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
//import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      {/* <Header /> */}
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={RecipeDashboardPage} />
        <PrivateRoute path="/create" component={AddRecipePage} />
        <PrivateRoute path="/edit/:id" component={EditRecipePage} />
        {/* <Route path="/help" component={HelpPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;