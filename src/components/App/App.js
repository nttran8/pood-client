// Libraries
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Component
import Header from "../Header/Header";

// Routes
import HomePage from "../../routes/HomePage/HomePage";
import AccountPage from "../../routes/AccountPage/AccountPage";
import DashboardPage from "../../routes/DashboardPage/DashboardPage";
import NewLogPage from '../../routes/NewLogPage/NewLogPage';
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";

// Style
import "./App.css";

export default class App extends Component {
  state = { error: false };

  static getDerivedStateFromError(err) {
    // Log error in console and UI, if any
    console.log(err);
    return { error: true };
  }

  render() {
    return (
      <>
        <Header />
        <main className="App">
          {this.state.error && <p className="red">Poop. There was an error!</p>}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={RegistrationPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/log" component={NewLogPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </>
    );
  }
}
