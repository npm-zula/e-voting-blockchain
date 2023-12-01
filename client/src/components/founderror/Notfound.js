import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 NOT FOUND!</h1>
      <p className="not-found-text">
        Page does not exist.
        <br />
        Go to{" "}
        <Link to="/" className="not-found-link">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
