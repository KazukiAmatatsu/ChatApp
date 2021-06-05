// import dayjs from 'dayjs';

const Message = ({ message }) => {
  const { user, content } = message;

  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>{user} : </span>
      <span>{content}</span>
    </div>
  );
};

export default Message;
