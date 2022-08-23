import React from "react";
import { useState } from "react";

function SumDigits() {
  const [input, setInput] = useState("");

  let arr = [];
  let total = 0;
  const returnValue = () => {
    arr = input.split("");

    for (let i = 0; i <= arr.length; i++) {
      if (!isNaN(arr[i])) {
        total += parseInt(arr[i]);
      }
    }
    return total;
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
          <h1>{returnValue()}</h1>
        </div>
      </div>
    </div>
  );
}

export default SumDigits;
