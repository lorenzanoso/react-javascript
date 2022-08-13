import React from "react";
import { useState } from "react";

function RightTriangle() {
  const [input, setInput] = useState(null);

  let num = [];
  let dig = "";
  const generateFibonacci = (enterNumber) => {
    for (let i = 1; i <= enterNumber; i++) {
      dig = dig.concat(" *");
      num.push(dig);
    }
    return num.map((data) => (
      <span className="text-danger d-block">{data}</span>
    ));
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
        <div className="col-12">{generateFibonacci(input)}</div>
      </div>
    </div>
  );
}

export default RightTriangle;
