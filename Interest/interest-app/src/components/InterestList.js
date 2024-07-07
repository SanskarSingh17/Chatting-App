import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterestList = ({ token }) => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/interests/', {
      headers: { Authorization: `Token ${token}` }
    })
    .then(response => {
      setInterests(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the interests!', error);
    });
  }, [token]);

  const handleAccept = (interestId) => {
    axios.patch(`http://localhost:8000/interests/${interestId}/`, { accepted: true }, {
      headers: { Authorization: `Token ${token}` }
    })
    .then(response => {
      alert('Interest accepted!');
      setInterests(interests.map(interest => interest.id === interestId ? response.data : interest));
    })
    .catch(error => {
      console.error('There was an error accepting the interest!', error);
    });
  };

  const handleReject = (interestId) => {
    axios.delete(`http://localhost:8000/interests/${interestId}/`, {
      headers: { Authorization: `Token ${token}` }
    })
    .then(response => {
      alert('Interest rejected!');
      setInterests(interests.filter(interest => interest.id !== interestId));
    })
    .catch(error => {
      console.error('There was an error rejecting the interest!', error);
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
