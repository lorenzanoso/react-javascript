import React from "react";
import { useState } from "react";

function RightTriangle() {
  const [input, setInput] = useState("");
  const returnTriangle = (number) => {
    let arr = [];
    let setNumber = "";

    for (let i = 1; i <= number; i++) {
      setNumber += " *";
      arr.push(setNumber);
    }

    return arr.map((data, index) => (
      <span className="d-block" key={index}>
        {data}
      </span>
    ));
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
          <h1>{returnTriangle(input)}</h1>
        </div>
      </div>
    </div>
  );
}

export default RightTriangle;
