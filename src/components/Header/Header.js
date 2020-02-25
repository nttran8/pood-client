// Library
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Service
import TokenService from "../../services/token-service";

// Data
import PoodContext from "../../contexts/PoodContext";

// Style
import "./Header.css";
import poodIcon from "../../img/Pood.svg";

export default class Header extends Component {
  static contextType = PoodContext;

  handleLogout = () => {
    // Log user out of session
    this.context.handleLogout();
  };

  renderLoginLink() {
    // Headers for loggedout users
    return (
      <ol className="Header__login navbar">
        <li>
          <Link className="nav" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav" to="/register">
            Register
          </Link>
        </li>
      </ol>
    );
  }

  renderLogoutLink() {
    // Headers for loggedin users
    return (
      <ol className="Header__logout navbar">
        <li>
          <Link className="nav" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="nav" to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link className="nav" to="/account">
            Account
          </Link>
        </li>

        <li>
          <Link className="nav" onClick={this.handleLogout} to="/">
            Logout
          </Link>
        </li>
      </ol>
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
