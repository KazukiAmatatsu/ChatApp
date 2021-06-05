import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Room from './pages/Room';
import firebase from './config/firebase';

import Auth from './utils/Auth';
import LoggedInRoute from './utils/LoggedInRoute';

const App = () => {
  return (
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
        <button onClick={() => firebase.auth().signOut()}>
          logout
        </button>
      </ul>
      <Auth>
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Auth>
    </Router>
  );
};

export default App;
