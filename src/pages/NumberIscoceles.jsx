import React from "react";
import { useState } from "react";

function NumberIscoceles() {
  const [input, setInput] = useState("");
  const returnTriangle = (number) => {
    let arr = [];
    let setNumber = "";

    for (let i = 1; i <= number; i++) {
      setNumber = setNumber + i + " ";
      arr.push(setNumber);
    }

    const newArr = arr.slice().reverse().slice(1);

    const combined = [].concat(arr, newArr);

    return combined.map((data, index) => (
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

export default NumberIscoceles;
