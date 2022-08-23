import React from "react";
import { useState } from "react";

function SumNatural() {
  const [input, setInput] = useState("");

  let total = 0;
  const returnNaturalNumber = (number) => {
    for (let i = 1; i <= number; i++) {
      total = total + i;
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
          <h1>{returnNaturalNumber(input)}</h1>
        </div>
      </div>
    </div>
  );
}

export default SumNatural;
