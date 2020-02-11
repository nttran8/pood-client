import React, { Component } from 'react';
import { CreateButton, CreateInput } from '../Utils/Utils';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistration: () => {}
  };

  state = { error: null };
  
  handleSubmit = event => {
    event.preventDefault();
    // Get input
    const { fullname, email, username, password } = event.target;

    // Validate user
    
    // Empty form
    fullname.value = '';
    email.value = '';
    username.value = '';
    password.value = '';

    // Redirect to homepage if login is succesful
    this.props.onRegistration();
  };

  render() {
    const { error } = this.state;
    return (
      <form 
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='RegistrationForm__credential'>
          <CreateInput className='username' id='username' placeholder='username' required>
          </CreateInput>
          <CreateInput className='email' id='email' placeholder='email' required>
          </CreateInput>
          <CreateInput className='password' id='password' placeholder='password' required>
          </CreateInput>
        </div>
        <CreateButton type='submit'>
          Register
        </CreateButton>
      </form>  
    );
  }
}
