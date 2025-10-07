import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const rows = [
    ["AC", "DEL", "/"],
    ["1", "2", "3", "*"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className="app-wrapper">
      <div className="calculator-container">
        <div className="calculator">
          <input
            type="text"
            value={input}
            readOnly
            className="calculator-input"
          />
          <div className="calculator-buttons">
            {rows.map((row, i) => (
              <div className="button-row" key={i}>
                {row.map((btn, idx) => (
                  <button
                    key={idx}
                    className={`button ${btn === "AC" ? "ac" : ""} ${
                      btn === "DEL" ? "del" : ""
                    } ${btn === "=" ? "equals" : ""}`}
                    onClick={() => handleClick(btn)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
