import React from "react";
import { useState } from "react";

function NumberRange() {
  const [input, setInput] = useState("");

  const returnResult = (number) => {
    if (isNaN(number) || !number) {
      return "Please Enter a number";
    }

    let within =
      parseInt(number) >= 100 && parseInt(number) <= 500 ? "True" : "False";

    return within;
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            placeholder="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-12">
          <h1>{returnResult(input)}</h1>
        </div>
      </div>
    </div>
  );
}

export default NumberRange;
