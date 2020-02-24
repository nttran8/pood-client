// Library
import React, { Component } from "react";

// Component
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

// Style
import "./RegistrationPage.css";
import registerImg from "../../img/Register.svg";

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleHomeRedirect = () => {
    // Redirect user to homepage/login page after user is registered
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return (
      <section className="RegistrationPage">
        <div className="Page__left sec">
          <p>Just doo it.</p>
          <img
            className="vision"
            src={registerImg}
            alt="character being dram"
          />
        </div>
        <div className="Page__right sec">
          <RegistrationForm onRegistration={this.handleHomeRedirect} />
        </div>
      </section>
    );
  }
}
