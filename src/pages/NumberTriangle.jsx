import React from "react";
import { useState } from "react";

function NumberTriangle() {
  const [input, setInput] = useState(null);
  const returnTriangle = (number) => {
    let arr = [];
    let setNumber = "";

    for (let i = 1; i <= number; i++) {
      setNumber = setNumber + "" + i;
      arr.push(setNumber);
    }

    return arr.map((data) => <span className="d-block">{data}</span>);
  };

  return (
    <div class="container p-5">
      <div class="row">
        <div className="col-12">
          <input
            type="text"
            placeholder="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-12">
          <h1>{returnTriangle(input)}</h1>
        </div>
      </div>
    </div>
  );
}

export default NumberTriangle;
