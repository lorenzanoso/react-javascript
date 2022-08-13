import React from "react";
import { useState } from "react";

function NumberRange() {
  const [input, setInput] = useState("");

  const checkNumber = (enterNumber) => {
    if (isNaN(enterNumber) || !enterNumber) {
      return "Please enter a number";
    }

    if (enterNumber >= 100 && enterNumber <= 500) {
      return <h3>true</h3>;
    } else {
      if (enterNumber === "") {
        return true;
      } else {
        return <h3>false</h3>;
      }
    }
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12">
          <input
            className="w-100 lead"
            type="text"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-12">{checkNumber(input)}</div>
      </div>
    </div>
  );
}

export default NumberRange;
