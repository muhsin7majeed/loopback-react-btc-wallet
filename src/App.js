import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path={`/dashboard`} component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
