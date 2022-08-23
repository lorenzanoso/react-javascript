import React from "react";
import { useState } from "react";

function MultiplicationTable() {
  const [input, setInput] = useState("");

  let arr = [];
  const returnTable = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number";
    }
    for (let i = 1; i <= 10; i++) {
      let newVal = input * i;

      arr.push(newVal);
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
          <h1>{returnTable()}</h1>
        </div>
      </div>
    </div>
  );
}

export default MultiplicationTable;
