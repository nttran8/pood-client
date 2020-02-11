// Libraries
import React, { Component } from 'react';

// Component
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistration = user => {
    // Render homepage/login page after user is registered
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Sign Up</h2>
        <RegistrationForm 
          onRegistration={this.handleRegistration}
        />
      </section>
    );
  }
}
