import React from "react";
import { useState } from "react";

function Strings() {
  const [input, setInput] = useState("");
  const returnString = (input) => {
    return input
      .split("")
      .reverse("")
      .join("")
      .split(" ")
      .reverse(" ")
      .join(" ");
  };
  return (
    <div class="container p-5">
      <div class="row">
        <div className="col-12">
          <input
            type="text"
            placeholder="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-12">
          <h1>{returnString(input)}</h1>
        </div>
      </div>
    </div>
  );
}

export default Strings;
