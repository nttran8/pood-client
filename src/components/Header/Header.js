// Library
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Service
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";

// Data
import PoodContext from "../../contexts/PoodContext";

// Style
import "./Header.css";
import poodIcon from "../../img/Pood.svg";

export default class Header extends Component {
  static contextType = PoodContext;

  handleLogout = () => {
    // Clear data on logout
    this.context.clearError();
    this.context.clearLogList();
    this.context.clearLog();
    this.context.clearUser();
    // Expire user token
    TokenService.clearAuthToken();
    // Remove token refresh and idle timers
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLoginLink() {
    // Headers for loggedout users
    return (
      <div className="Header__login navbar">
        <Link className="nav" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav" to="/register">
          <li>Register</li>
        </Link>
      </div>
    );
  }

  renderLogoutLink() {
    // Headers for loggedin users
    return (
      <div className="Header__logout navbar">
        <Link className="nav" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav" to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link className="nav" to="/account">
          <li>Account</li>
        </Link>
        <Link className="nav" onClick={this.handleLogout} to="/">
          <li>Logout</li>
        </Link>
      </div>
    );
  }

  checkToken = () => {
    // Show header in mobile view when logged in
    if (TokenService.getAuthToken()) {
      return "Header";
    } else return "";
  };

  render() {
    // Return to homepage when logo is clicked
    return (
      <nav className="Header" id={this.checkToken()}>
        <header className="Header__container">
          <div className="Header__logo">
            <h1>
              <Link to="/">
                <img className="logo" src={poodIcon} alt="logo" />
              </Link>
            </h1>
          </div>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </header>
      </nav>
    );
  }
}
