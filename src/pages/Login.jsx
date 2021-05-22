import React from 'react';
import firebase from '../firebase';

const Login = ({ history }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const user = React.useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/'); // "/"に遷移
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // if (user) {
  // return <Redirect to="/" />;
  // }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
