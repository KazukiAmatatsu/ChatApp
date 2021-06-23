import React from 'react';
import firebase from '../config/firebase';

const PostForm = () => {
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection('messages').add({
      content: value,
      user: name,
    });
    setName('');
    setValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">送信</button>
    </form>
  );
};

export default PostForm;
