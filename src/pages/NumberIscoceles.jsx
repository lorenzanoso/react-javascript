import React from "react";
import { useState } from "react";

function NumberIscoceles() {
  const [input, setInput] = useState(null);

  let num = [];
  let dig = "";
  const getNumber = (enterNumber) => {
    for (let i = 1; i <= enterNumber; i++) {
      dig = dig.concat(" ", i);
      num.push(dig);
    }

    const newArr = num.slice().reverse().slice(1);

    const combined = [].concat(num, newArr);

    return combined.map((data) => (
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
        <div className="col-12">{getNumber(input)}</div>
      </div>
    </div>
  );
}

export default NumberIscoceles;
