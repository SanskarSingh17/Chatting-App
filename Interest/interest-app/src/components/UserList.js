import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ token, setReceiverId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users/', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the users!', error);
    });
  }, [token]);

  const sendInterest = (userId) => {
    axios.post('http://localhost:8000/interests/', { receiver: userId }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      alert('Interest sent!');
    })
    .catch(error => {
      console.error('There was an error sending the interest!', error);
    });
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username}
            <button onClick={() => sendInterest(user.id)}>Send Interest</button>
            <button onClick={() => setReceiverId(user.id)}>Chat</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
