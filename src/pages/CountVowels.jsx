import React from "react";
import { useState } from "react";

function CountVowels() {
  const [input, setInput] = useState("");

  let count = 0;
  const countNumberVowels = () => {
    input.split("").forEach((data) => {
      if (data.toLowerCase().match(/[aeiou]/)) {
        count = count + 1;
      }
    });
    return count;
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
        <div className="col-12">{countNumberVowels()}</div>
      </div>
    </div>
  );
}
export default CountVowels;
