// Library
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Service
import ApiService from "../../services/api-service";

// Component
import { CreateButton, CreateInput } from "../Utils/Utils";

// Style
import "./RegistrationForm.css";
import poodIcon from "../../img/Pood.svg";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistration: () => {}
  };

  state = { error: null };

  handleSubmit = event => {
    event.preventDefault();
    // Get input when user register
    const { email, username, password } = event.target;
    // Reset error
    this.setState({ error: null });
    // Register user
    ApiService.postUser({
      username: username.value.toLowerCase(),
      email: email.value.toLowerCase(),
      password: password.value
    })
      .then(user => {
        // Empty form
        email.value = "";
        username.value = "";
        password.value = "";

        alert("Registration success. Please login");
        // Redirect to homepage if registry is succesful
        this.props.onRegistration();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <div className="RegistrationForm__logoBox">
          <img className="RegistrationForm__logo" src={poodIcon} alt="logo" />
        </div>
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <div className="formBox">
            <h2>Create Account</h2>
            <div role="alert">{error && <p className="red">{error}</p>}</div>
            <div className="RegistrationForm__credential">
              <div className="inputBox">
                <label htmlFor="username" aria-label="username">
                  <FontAwesomeIcon icon="user" />
                </label>
                <CreateInput
                  className="username publicPlaceholder"
                  id="username"
                  placeholder="Username"
                  required
                />
              </div>

              <div className="inputBox">
                <label htmlFor="email" aria-label="email">
                  <FontAwesomeIcon icon="envelope" />
                </label>
                <CreateInput
                  className="email publicPlaceholder"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="inputBox">
                <label htmlFor="password" aria-label="password">
                  <FontAwesomeIcon icon="lock" />
                </label>
                <CreateInput
                  type="password"
                  className="password publicPlaceholder"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <CreateButton type="submit">Register</CreateButton>
            <CreateButton
              className="hideButton"
              type="button"
              onClick={this.props.onRegistration}
            >
              Back
            </CreateButton>
          </div>
        </form>
      </>
    );
  }
}
