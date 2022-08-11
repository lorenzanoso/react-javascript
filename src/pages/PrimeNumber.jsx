import React from "react";
import { useState } from "react";

function PrimeNumber() {
  const [input, setInput] = useState(1);

  const checkIfPrimeNumber = (number) => {
    let isPrime = true;

    // check if number Nan or Null

    if (isNaN(number) || !number) {
      return "Please enter a number";
    }

    // check if less than 1
    else if (parseInt(number) < 1) {
      return "The number is not a prime number";
    } else if (parseInt(number) === 1) {
      return "1 is neither prime nor composite number";
    }

    // check if number is greater than 1
    else {
      for (let i = 2; i < parseInt(number); i++) {
        if (parseInt(number) % i === 0) {
          isPrime = false;
          break;
        }
      }

      return isPrime
        ? `${number} is a prime number`
        : `${number} is not a prime number`;
    }
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
            value={checkIfPrimeNumber(input)}
          />
        </div>
      </div>
    </div>
  );
}

export default PrimeNumber;
