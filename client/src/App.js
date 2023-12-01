import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

function NotFound() {
  return (
    <>
      <h1>404 NOT FOUND!</h1>
      <center>
        <p>
          Page does not exist.
          <br />
          Go to{" "}
          <Link to="/" style={{ color: "black", textDecoration: "underline" }}>
            Home
          </Link>
        </p>
      </center>
    </>
  );
}

export default App;
