// Libraries
import React, { Component } from 'react';

// Service
import TokenService from '../../services/token-service';

// Component
import LoginForm from '../../components/LoginForm/LoginForm';

// Style
import './HomePage.css';
import dooerImg from '../../img/Dooers.svg';


export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginRedirect = (userToken) => {
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
    // if(user.name === 'nt') {
    //   return true;
    // }
    return false;
  };

  render() {
    return (
      <section className="HomePage">
        <div className="Page__left sec">
          <p>Our vision is to inspire and unite a world of doo-ers.</p>
          <img className="vision" src={dooerImg} alt="friends high fiving"/>
        </div>
        <div className="Page__right sec">
          {TokenService.hasAuthToken()
          ? <img alt="poo'd logo"/>
          : <LoginForm onLogin={this.handleLoginRedirect} onRegister={this.handleRegistrationRedirect}/> 
          }
        </div>
      </section>
    );
  }
}