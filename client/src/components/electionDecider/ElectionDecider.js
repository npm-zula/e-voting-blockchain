import React from "react";
import { Link } from "react-router-dom";

// StartEnd.js

const ElectionDecider = (props) => {
  return (
    <div className="container-main">
      {!props.elStarted ? (
        <>
          {!props.elEnded ? (
            <>
              <div className="container-item attention">
                <h2>Do not forget to add candidates.</h2>
                <p>
                  Go to{" "}
                  <Link title="Add a new " to="/addCandidate">
                    add candidates
                  </Link>{" "}
                  page.
                </p>
              </div>
              <div className="container-item">
                <button type="submit">
                  Start Election {props.elEnded ? "Again" : null}
                </button>
              </div>
            </>
          ) : (
            <div className="container-item">
              <center>
                <p>Re-deploy the contract to start the election again.</p>
              </center>
            </div>
          )}
          {props.elEnded ? (
            <div className="container-item">
              <center>
                <p>The election ended.</p>
              </center>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="container-item">
            <center>
              <p>The election started.</p>
            </center>
          </div>
          <div className="container-item">
            <button type="button" onClick={props.endElFn}>
              End
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ElectionDecider;
