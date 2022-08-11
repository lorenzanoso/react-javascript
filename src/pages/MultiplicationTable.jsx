import React from "react";
import { useState } from "react";

function MultiplicationTable() {
  const [input, setInput] = useState();

  let arr = [];
  const checkNumber = (number) => {
    if (isNaN(number) || !number) {
      return "Please enter a number";
    }
    for (let i = 1; i <= 10; i++) {
      let newVal = number * i;

      arr.push(newVal);
    }

    return arr.map((data) => data);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            className="w-100 lead"
            type="text"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            type="text"
            placeholder="Output"
            readOnly={true}
            value={checkNumber(input)}
          />
        </div>
      </div>
    </div>
  );
}

export default MultiplicationTable;
