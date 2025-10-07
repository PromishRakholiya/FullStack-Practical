import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [greeting, setGreeting] = useState('');

  const [time, setTime] = useState(new Date());

  const [feedback, setFeedback] = useState({
    Excellent: 0,
    Good: 0,
    Average: 0,
    Poor: 0
  });

  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const categories = ['Excellent', 'Good', 'Average', 'Poor'];
    const interval = setInterval(() => {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      setFeedback(prev => ({
        ...prev,
        [randomCategory]: prev[randomCategory] + 1
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleVote = (category) => {
    setFeedback(prev => ({
      ...prev,
      [category]: prev[category] + 1
    }));
    setUserCount(count => count + 1);
  };

  const handleGreeting = () => {
    if (firstName && surname) {
      setGreeting(`Welcome, ${firstName} ${surname} !`);
    } else {
      setGreeting('Please enter both first name and surname.');
    }
  };

  return (
    <div className="dashboard">
      <h1>Live Event Feedback Dashboard</h1>

      <div className="greeting-section">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={e => setSurname(e.target.value)}
        />
        <button onClick={handleGreeting}>Submit</button>
        {greeting && <h2>{greeting}</h2>}
      </div>

      <div className="clock">
        <p>Current Time: {time.toLocaleTimeString()}</p>
        <p>Date: {time.toLocaleDateString()}</p>
      </div>

      <div className="feedback-panel">
        <h3>Give your Feedback:</h3>
        {['Excellent', 'Good', 'Average', 'Poor'].map(category => (
          <button key={category} onClick={() => handleVote(category)}>{category}</button>
        ))}
        <div className="feedback-results">
          {Object.entries(feedback).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
          ))}
        </div>
      </div>

      <div className="counter-panel">
        <h3>Your Feedback Submissions: {userCount}</h3>
        <button onClick={() => setUserCount(userCount + 1)}>Increment</button>
        <button onClick={() => setUserCount(Math.max(0, userCount - 1))}>Decrement</button>
        <button onClick={() => setUserCount(0)}>Reset</button>
        <button onClick={() => setUserCount(userCount + 5)}>+5</button>
      </div>
    </div>
  );
};

export default App;
