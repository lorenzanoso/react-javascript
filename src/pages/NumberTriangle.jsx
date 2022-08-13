import React from "react";
import { useState } from "react";

function NumberTriangle() {
  let numArr = [];
  let num = "";
  const [input, setInput] = useState(null);
  const generateFibonacci = (enterNumber) => {
    for (let i = 1; i <= enterNumber; i++) {
      num = num + " " + i;
      numArr.push(num);
    }
    return numArr.map((data) => (
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

export default NumberTriangle;
