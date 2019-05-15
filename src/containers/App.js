import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Games } from "../Pages/Games";
import { NoMatch } from "../Pages/NoMatch";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/games" component={Games} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
