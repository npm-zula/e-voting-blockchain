import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NotFound from "./components/founderror/Notfound";

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

export default App;
