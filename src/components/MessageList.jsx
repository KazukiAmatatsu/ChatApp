import React from 'react';
import firebase from '../config/firebase';
import Message from './Message';

const MessageList = () => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection('messages')
      .onSnapshot((snapshot) => {
        const date = snapshot.docs.map((doc) => {
          const id = doc.id;
          return { id, ...doc.data() };
        });
        console.log(date);
        setMessages(date);
      });
  }, []);

  return (
    <div>
      <h2>Message List</h2>
      <hr />
      {messages.map((message) => (
        <>
          <Message key={message.id} message={message} />
          <hr />
        </>
      ))}
    </div>
  );
};

export default MessageList;
