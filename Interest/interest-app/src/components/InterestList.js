// InterestList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterestList = ({ token }) => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/interests/', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setInterests(response.data);
    })
    .catch(error => {
      console.error('Error fetching interests:', error);
    });
  }, [token]);

  const handleAccept = (interestId) => {
    axios.patch(`http://localhost:8000/interests/${interestId}/`, { accepted: true }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      alert('Interest accepted!');
      setInterests(interests.map(interest => interest.id === interestId ? response.data : interest));
    })
    .catch(error => {
      console.error('Error accepting interest:', error);
    });
  };

  const handleReject = (interestId) => {
    axios.delete(`http://localhost:8000/interests/${interestId}/`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      alert('Interest rejected!');
      setInterests(interests.filter(interest => interest.id !== interestId));
    })
    .catch(error => {
      console.error('Error rejecting interest:', error);
    });
  };

  return (
    <div>
      <h2>Received Interests</h2>
      <ul>
        {interests.map(interest => (
          <li key={interest.id}>
            {interest.sender.username}
            <button onClick={() => handleAccept(interest.id)}>Accept</button>
            <button onClick={() => handleReject(interest.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterestList;
