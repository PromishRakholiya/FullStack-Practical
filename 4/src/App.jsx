import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);
  const incrementFive = () => setCount(prev => prev + 5);

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <div className="buttons">
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
      </div>

      <h2>Welcome to CHARUSAT!!!</h2>

      <div className="form">
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>

      <div className="output">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </div>
    </div>
  );
};

export default App;
