import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="header">
        <i className="fab fa-bandcamp"></i> Home
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to="/Registration" activeClassName="nav-active">
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/Voting" activeClassName="nav-active">
            Voting
          </NavLink>
        </li>
        <li>
          <NavLink to="/Results" activeClassName="nav-active">
            Results
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
