import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark py-3 bg-dark ">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Javascript Examples
          </NavLink>
          {/* <div className="collapse navbar-collapse ">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">
                  Fibonacci
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/strings">
                  Strings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/prime-numbers">
                  Prime-Numbers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/multiplication-table">
                  Multiplication-Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/sum-natural">
                  Sum Natural Numbers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/sum-digits">
                  Sum All Digits
                </NavLink>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
