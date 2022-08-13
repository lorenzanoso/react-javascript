import React from "react";
import { useState } from "react";

// input from user
function Fibonacci() {
  const [input, setInput] = useState(null);

  let first = 0;
  let second = 1;

  const sequence = [];

  const generateFibonacci = (enterNumber) => {
    // first scenario
    if (isNaN(enterNumber || !enterNumber)) {
      return "Please enter a number";
    } else if (enterNumber === 1) {
      return <h2>0</h2>;
    }
    //2nd scenario
    for (let i = 1; i <= enterNumber; i++) {
      sequence.push(first);
      let nextTerm = first + second;
      first = second;
      second = nextTerm;
    }

    return sequence.map((data, index) => (
      <h2 className="text-danger" key={index}>
        {data}
      </h2>
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
        <div className="col-12">
          <h1>Enter the number of terms: {input}</h1>
          <h2>Fibonacci series:</h2>
          {generateFibonacci(input)}
        </div>
      </div>
    </div>
  );
}

export default Fibonacci;
