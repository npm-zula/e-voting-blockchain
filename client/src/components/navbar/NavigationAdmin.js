import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function NavbarAdmin() {
  return (
    <nav>
      <div className="header">
        <NavLink to="/">
          <i className="fab fa-bandcamp" /> Admin
        </NavLink>
      </div>
      <ul className="admin-links">
        <li>
          <NavLink to="/Verification" activeClassName="nav-active">
            Verification
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddCandidate" activeClassName="nav-active">
            Add Candidate
          </NavLink>
        </li>
      </ul>
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
