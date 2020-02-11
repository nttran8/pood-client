import React, { Component } from 'react';
import { CreateButton, CreateInput } from '../Utils/Utils';

export default class LoginForm extends Component {
  static defaultProps = {
    onLogin: () => {}
  };

  state = { error: null };
  
  handleUserAuth = event => {
    event.preventDefault();
    // Get input
    const { username, password } = event.target;

    // Validate user
    
    // Empty form
    username.value = '';
    password.value = '';

    // Redirect to dashboard if login is succesful
    this.props.onLogin();
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <form 
          className='LoginForm'
          onSubmit={this.handleUserAuth}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='LoginForm__credential'>
            <CreateInput className='username' id='username' placeholder='username'>
            </CreateInput>
            <CreateInput className='password' id='password' placeholder='password'>
            </CreateInput>
          </div>
          <CreateButton type='submit'>
            Sign in
          </CreateButton>
        </form>
        <div>
          <p>Forgot your password?</p>
          <CreateButton type='button' onClick={this.props.onRegister}>
          Register
          </CreateButton>
        </div>
      </>
    );
  }
}
