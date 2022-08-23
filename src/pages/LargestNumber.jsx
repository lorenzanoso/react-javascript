import React from "react";
import { useState } from "react";

function LargestNumber() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  // const largestN = (first, second, third) => {
  //   const arr = [first, second, third];
  //   let largest = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > largest) {
  //       largest = arr[i];
  //     }
  //   }
  //   return largest;
  // };
  const largestNumber = (first, second, third) => {
    return Math.max(first, second, third);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12">
          <input
            className="w-100 lead"
            type="text"
            placeholder="Input"
            value={firstInput}
            onChange={(e) => setFirstInput(e.target.value)}
          />
          <input
            className="w-100 lead"
            type="text"
            placeholder="Input"
            value={secondInput}
            onChange={(e) => setSecondInput(e.target.value)}
          />
          <input
            className="w-100 lead"
            type="text"
            placeholder="Input"
            value={thirdInput}
            onChange={(e) => setThirdInput(e.target.value)}
          />
        </div>
        <div className="col-12">
          {largestNumber(firstInput, secondInput, thirdInput)}
        </div>
      </div>
    </div>
  );
}

export default LargestNumber;
