import React from "react";
import { useState } from "react";

function SumDigits() {
  const [input, setInput] = useState("");

  let total = 0;
  const getTotal = () => {
    input.split("").forEach((data) => {
      if (!isNaN(data)) {
        total += parseInt(data);
      }
    });
    return total;
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
          {/* {getTotal(input)} */}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            type="text"
            placeholder="Output"
            readOnly={true}
            value={getTotal(input)}
          />
        </div>
      </div>
    </div>
  );
}

export default SumDigits;
