import React from "react";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <div className="container p-5 list-group">
      <Link className="list-group-item list-group-item-action" to="/fibonacci">
        Fibonacci
      </Link>
      <Link className="list-group-item list-group-item-action" to="/strings">
        Strings
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/prime-numbers"
      >
        Prime Numbers
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
    </div>
  );
}

export default MainContent;
