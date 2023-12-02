import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./components/founderror/Notfound";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
