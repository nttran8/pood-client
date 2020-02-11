// Libraries
import React, { Component } from 'react';

// Component
import LoginForm from '../../components/LoginForm/LoginForm';

// Data
import store from '../../store';


export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginRedirect = () => {
    // Render dashboard if login is successful
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/dashboard';
    history.push(destination);
  };

  handleRegistrationRedirect = () => {
    // Render homepage/login page
    const { history } = this.props;
    history.push('/register');
  };

  loggedIn = () => {
    // Check if user is logged in
    if(store.user.name === 'nt') {
      return true;
    }
    return false;
  };

  render() {
    return (
      <section className="HomePage">
        <h2>Our vision: A world of doo-ers.
        </h2>
        {this.loggedIn()
        ? <img alt="poo'd logo"/>
        : <LoginForm onLogin={this.handleLoginRedirect} onRegister={this.handleRegistrationRedirect}/> 
        }
      </section>
    );
  }
}