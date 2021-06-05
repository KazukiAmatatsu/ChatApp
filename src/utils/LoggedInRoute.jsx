import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const LoggedInRoute = ({ component: Component, ...props }) => {
  const user = React.useContext(AuthContext);

  // console.log(props);
  // console.log(user);

  return (
    <Route
      {...props} //親から受け取ったpropsを全部流す書き方
      render={(props) =>
        user ? (
          <Component {...props} /> //親から受け取ったcomponent
        ) : (
          <Redirect to="/login" /> //リダイレクトさせる機能を持つcomponent
        )
      }
    />
  );
};

export default LoggedInRoute;
