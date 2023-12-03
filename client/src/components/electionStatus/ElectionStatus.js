import React from "react";
import "./style.css";

const ElectionStatus = (props) => {
  return (
    <div className="container-main">
      <h3>Election Status</h3>
      <div>
        <p>Started: {props.elStarted ? "True" : "False"}</p>
        <p>Ended: {props.elEnded ? "True" : "False"}</p>
      </div>
      <div className="container-item" />
    </div>
  );
};

export default ElectionStatus;
