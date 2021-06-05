import React from 'react';
import MessageList from '../components/MessageList';
import PostForm from '../components/PostForm';
import firebase from '../config/firebase';

// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

const Room = () => {
  return (
    <div>
      <h1>Room</h1>
      <PostForm />
      <MessageList />

      <button onClick={() => firebase.auth().signOut()}>
        Logout
      </button>
    </div>
  );
};

export default Room;
