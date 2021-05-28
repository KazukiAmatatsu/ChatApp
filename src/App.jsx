import React from 'react';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Room from './pages/Room';

import { AuthProvider } from './AuthService';
import LoggedInRoute from './LoggedInRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ul>
          <li>
            <Link to="/">ROOM</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/signup">SIGNUP</Link>
          </li>
        </ul>
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
