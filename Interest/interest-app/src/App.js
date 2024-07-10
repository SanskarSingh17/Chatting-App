import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';
import InterestList from './components/InterestList';
import Chat from './components/Chat';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to InterestApp</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/interests" element={<InterestList />} />
          <Route path="/chat/:receiverId" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
