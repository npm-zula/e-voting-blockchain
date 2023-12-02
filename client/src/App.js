import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./components/founderror/Notfound";
import Footer from "./components/Footer/Footer";
import AddCandidate from "./components/Admin/AddCandidate/AddCandidate";
import Results from "./components/Results/Results";
import Registration from "./components/Registration/Registration";
import Voting from "./components/Voting/Voting";
import Verification from "./components/Admin/Verification/Verification";

import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AddCandidate" component={AddCandidate} />
          <Route exact path="/Results" component={Results} />
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/Verification" component={Verification} />
          <Route exact path="/Voting" component={Voting} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
