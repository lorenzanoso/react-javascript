import React from "react";
import { useState } from "react";

function SumNatural() {
  const [input, setInput] = useState();

  const checkNumber = (number) => {
    // Check if letter or null
    if (isNaN(number) || !number) {
      return "Please enter a number";
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum = sum + i;
    }
    return sum;
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            className="w-100 lead"
            type="text"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            type="text"
            placeholder="Output"
            readOnly={true}
            value={checkNumber(input)}
          />
        </div>
      </div>
    </div>
  );
}
export default SumNatural;
