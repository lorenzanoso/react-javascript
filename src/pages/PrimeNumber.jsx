import React from "react";
import { useState } from "react";

function PrimeNumber() {
  const [input, setInput] = useState("");

  const checkIfPrime = () => {
    let isPrime = true;
    // check if number Nan or Null

    if (isNaN(input) || !input) {
      return "Please enter a number";
    }
    // check if less than 1
    else if (parseInt(input) < 1) {
      return "The number is not a prime number";
    } else if (parseInt(input) === 1) {
      return "1 is neither prime nor composite number";
    }

    // check if number is greater than 1
    else {
      for (let i = 2; i < parseInt(input); i++) {
        if (parseInt(input) % i === 0) {
          isPrime = false;

          break;
        }
      }

      return isPrime
        ? `${input} is a prime number`
        : `${input} is not a prime number`;
    }
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
          <h1>{checkIfPrime(input)}</h1>
        </div>
      </div>
    </div>
  );
}

export default PrimeNumber;
