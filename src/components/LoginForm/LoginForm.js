// Library
import React, { Component } from 'react';

// Data
import PoodContext from '../../contexts/PoodContext';

// Service
import ApiService from '../../services/api-service';
import { CreateButton, CreateInput } from '../Utils/Utils';

// Style 
import './LoginForm.css';
import poodIcon from '../../img/Pood.svg';

export default class LoginForm extends Component {
  static contextType = PoodContext;
  static defaultProps = {
    onLogin: () => {}
  };

  state = { error: null };
  
  handleUserAuth = event => {
    event.preventDefault();
    // Reset error
    this.setState({ error: null });
    // Get input
    const { username, password } = event.target;
    // Log user
    ApiService.postLogin({
      username: username.value.toLowerCase(),
      password: password.value
    })
      .then(res => {
        // Clear form
        username.value = '';
        password.value = '';
        // Redirect to dashboard if login is succesful
        this.props.onLogin();
      })
      .catch(res => this.setState({ error: res.error}));
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <div className='LoginForm__logoBox'>
          <img className='LoginForm__logo' src={poodIcon} alt='logo'/>
        </div>
        <form 
          className='LoginForm'
          onSubmit={this.handleUserAuth}
        >
          <div className='formBox'>
            <h2>Login</h2>
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>

            <div className='inputBox'>
              <i className="fas fa-user"></i>
              <CreateInput 
                className='username' 
                id='username' 
                placeholder='Username'
              />
            </div>
          
            <div className='inputBox'>
              <i className="fas fa-lock"></i>
              <CreateInput 
                className='password' 
                id='password' 
                type='password'
                placeholder='Password'
              />
            </div>

            <CreateButton type='submit'>
              Sign in
            </CreateButton>
            <CreateButton type='button' onClick={this.props.onRegister}>
              Register
            </CreateButton>
          </div>
        </form>
      </>
    );
  }
}
