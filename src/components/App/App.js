// Libraries
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import HomePage from "../../routes/HomePage/HomePage";
import AccountPage from "../../routes/AccountPage/AccountPage";
import DashboardPage from "../../routes/DashboardPage/DashboardPage";
import NewLogPage from '../../routes/NewLogPage/NewLogPage';
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";

// Services
import TokenService from '../../services/token-service';
import ApiService from '../../services/api-service';
import IdleService from '../../services/idle-service';

// Component
import Header from '../Header/Header';

// Data
import PoodContext from '../../contexts/PoodContext';

// Style
import "./App.css";

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
  }

  render() {
    return (
      <main style={{backgroundImage: this.context.background, backgroundColor: this.context.color}} className="App">
        <Header />
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
    );
  }
}
