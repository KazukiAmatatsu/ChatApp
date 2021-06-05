import React from 'react';
import firebase from '../config/firebase';

export const AuthContext = React.createContext();

const Auth = ({ children }) => {
  const [user, setUser] = React.useState(null);
  console.log('user: ', user);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
