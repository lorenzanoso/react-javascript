import React from "react";
import { useState } from "react";

function RandomName() {
  const [output, setOutput] = useState("");
  const names = [
    "Alex",
    "Pearl",
    "Aries",
    "Paulo",
    "Jeffrey",
    "John Glay",
    "John Paul",
    "Jovernie",
    "Kaila",
    "Kevin",
    "Lorenz",
    "Marianne",
    "Mark",
    "Matthew",
    "Michael",
    "Nathan",
    "Bong",
    "Rhea",
    "Saro",
    "Adrianne",
    "Beverly",
    "Ray Matthew",
    "Therese",
    "Joeneil",
    "Richard",
    "Norman",
  ];

  const getName = () => {
    const index = Math.floor(Math.random() * 26);
    return setOutput(names[index]);
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <button
            className="btn btn-danger w-50 mb-5"
            onClick={() => getName()}
          >
            Generate Name
          </button>
          <h1 className="text-dark lead" style={{ fontSize: "100px" }}>
            {output}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default RandomName;
