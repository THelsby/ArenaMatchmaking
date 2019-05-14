import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { Cakes } from "../components/Cakes";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { NoMatch } from "../components/NoMatch";
import { Layout } from "../components/Layout";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cakes" component={Cakes} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
