import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ token, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/messages/?receiver=${receiverId}`, {
      headers: { Authorization: `Token ${token}` }
    })
    .then(response => {
      setMessages(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the messages!', error);
    });
  }, [token, receiverId]);

  const sendMessage = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/messages/', { receiver: receiverId, message: message }, {
      headers: { Authorization: `Token ${token}` }
    })
    .then(response => {
      setMessages([...messages, response.data]);
      setMessage('');
    })
    .catch(error => {
      console.error('There was an error sending the message!', error);
    });
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender.username}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
