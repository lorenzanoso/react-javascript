import React from "react";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <div className="container p-5 list-group">
      <Link
        className="list-group-item list-group-item-action"
        to="/right-triangle"
      >
        Return Right Triangle
      </Link>

      <Link className="list-group-item list-group-item-action" to="/strings">
        Strings
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/number-triangle"
      >
        Number right triangle
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/multiplication-table"
      >
        Multiplication Table
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        to="/sum-natural"
      >
        Sum of Natural Numbers
      </Link>
      <Link className="list-group-item list-group-item-action" to="/sum-digits">
        Sum of all Digits in a String
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        to="/number-range"
      >
        Number within a range
      </Link>
      <Link className="list-group-item list-group-item-action" to="/fibonacci">
        Fibonacci
      </Link>

      <Link className="list-group-item list-group-item-action" to="/triangle">
        Isoceles Triangle
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/prime-numbers"
      >
        Prime Numbers
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/largest-number"
      >
        Get largest number
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/count-vowels"
      >
        Count number of vowels
      </Link>
      <Link className="list-group-item list-group-item-action" to="/number-iso">
        Number of Isoceles
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/random-name"
      >
        Random Name Generator
      </Link>
    </div>
  );
}

export default MainContent;
