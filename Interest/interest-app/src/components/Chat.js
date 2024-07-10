// Chat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ token, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (receiverId) {
      axios.get(`http://localhost:8000/messages/?receiver=${receiverId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
    }
  }, [receiverId, token]);

  const handleSendMessage = () => {
    axios.post('http://localhost:8000/messages/', { receiver: receiverId, message: message }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setMessages([...messages, response.data]);
      setMessage('');
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>{msg.message}</div>
        ))}
      </div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
