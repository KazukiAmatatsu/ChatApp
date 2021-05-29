import React from 'react';
import firebase from '../firebase';

// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

const Room = () => {
  const [messages, setMessages] = React.useState(null);
  const [value, setValue] = React.useState('');

  return (
    <>
      <h1>Room</h1>
      <ul>
        <li>samle user : sample message</li>
      </ul>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </>
  );
};

export default Room;
