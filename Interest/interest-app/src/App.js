import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';
import InterestList from './components/InterestList';
import Chat from './components/Chat';

const App = () => {
  const [token, setToken] = useState('');
  const [receiverId, setReceiverId] = useState(null);

  if (!token) {
    return (
      <div>
        <h1>Welcome to InterestApp</h1>
        <Login setToken={setToken} />
        <Register />
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to InterestApp</h1>
      <UserList token={token} />
      <InterestList token={token} />
      {receiverId && <Chat token={token} receiverId={receiverId} />}
    </div>
  );
};

export default App;
