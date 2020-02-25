// Library
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faLock,
  faPoop
} from "@fortawesome/free-solid-svg-icons";

// Route
import HomePage from "../../routes/HomePage/HomePage";
import AccountPage from "../../routes/AccountPage/AccountPage";
import DashboardPage from "../../routes/DashboardPage/DashboardPage";
import NewLogPage from "../../routes/NewLogPage/NewLogPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";

// Service
import TokenService from "../../services/token-service";
import ApiService from "../../services/api-service";
import IdleService from "../../services/idle-service";

// Component
import Header from "../Header/Header";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";

// Data
import PoodContext from "../../contexts/PoodContext";

// Style
import "./App.css";
library.add(faUser, faEnvelope, faLock, faPoop);

export default class App extends Component {
  state = {
    error: false
  };

  static contextType = PoodContext;

  static getDerivedStateFromError(err) {
    // Log error in console and UI, if any
    console.log(err);
    return { error: true };
  }

  componentDidMount() {
    // Start idle timer and log user out when timer is up
    IdleService.setIdleCallback(this.logoutFromIdle);

    // For logged in users
    if (TokenService.hasAuthToken()) {
      // Reset idle timer if there are user interations on the page
      IdleService.regiserIdleTimerResets();
      // Check the token for expiry time before it's expired
      TokenService.queueCallbackBeforeExpiry(() => {
        // Get a refresh token before token expires
        ApiService.postRefresh();
      });
    }
  }

  componentWillUnmount() {
    // Stop listening for events and do not auto-logout the user when page is unmounted
    IdleService.unRegisterIdleResets();
    // Stop requesting for refresh token
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    // Remove token
    TokenService.clearAuthToken();
    // Stop getting refresh token
    TokenService.clearCallbackBeforeExpiry();
    // Remove idle timeout
    IdleService.unRegisterIdleResets();
    // Rerender to let React know that token is removed
    this.forceUpdate();
  };

  render() {
    return (
      <main className="App">
        <Header />
        {this.state.error && <p className="red">Poop. There was an error!</p>}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute path="/register" component={RegistrationPage} />
          <PrivateRoute path="/account" component={AccountPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/log" component={NewLogPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}
