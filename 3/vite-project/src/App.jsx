import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="ab">
      <div>
        <h1>Welcome to CHARUSAT!!!!</h1>
      </div>
      <div>
        <p>
          Current Local Date :{" "}
          <strong>{currentTime.toLocaleDateString()}</strong>
        </p>
        <p>
          Current Local Time:{" "}
          <strong>{currentTime.toLocaleTimeString()}</strong>
        </p>
      </div>
      </div>
    </>
  );
};

export default App;
