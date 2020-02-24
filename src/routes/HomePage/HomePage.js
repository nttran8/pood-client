// Library
import React, { Component } from "react";

// Service
import TokenService from "../../services/token-service";

// Component
import LoginForm from "../../components/LoginForm/LoginForm";

// Style
import "./HomePage.css";
import dooerImg from "../../img/Dooers.svg";
import todoImg from "../../img/Todo.svg";

export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginRedirect = userToken => {
    // Redirect user to dashboard if login is successful
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  };

  handleRegistrationRedirect = () => {
    // Redirect user to homepage/login page if registration is successful
    const { history } = this.props;
    history.push("/register");
  };

  checkToken = () => {
    // Show different styling in mobile view when logged in
    if (TokenService.getAuthToken()) {
      return "Page__right";
    } else return "";
  };

  render() {
    return (
      <section className="HomePage">
        <div className="Page__left sec">
          <p>
            Poo'd is created to inspire and unite a world of doo-ers like you.
            Let's start logging now!
          </p>
          <img className="vision" src={dooerImg} alt="friends high fiving" />
        </div>
        <div className="Page__right sec" id={this.checkToken()}>
          {TokenService.hasAuthToken() ? (
            <div className="Page__todo">
              <p>What's on your to doo list...?</p>
              <img className="todo" src={todoImg} alt="check off to do list" />
            </div>
          ) : (
            <LoginForm
              onLogin={this.handleLoginRedirect}
              onRegister={this.handleRegistrationRedirect}
            />
          )}
        </div>
      </section>
    );
  }
}
