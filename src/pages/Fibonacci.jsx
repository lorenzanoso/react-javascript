import React from "react";
import { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState("");

  let arr = [];

  let firstNum = 0;
  let secondNum = 1;

  const returnValue = (number) => {
    for (let i = 1; i <= number; i++) {
      arr.push(firstNum);
      let newNumber = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = newNumber;
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
          <h1>{returnValue(input)}</h1>
        </div>
      </div>
    </div>
  );
}
