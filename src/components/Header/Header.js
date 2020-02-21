// Library
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Service
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';

// Data
import PoodContext from '../../contexts/PoodContext';

// Style
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import poodIcon from '../../img/Pood.png';

export default class Header extends Component {
  static contextType = PoodContext;

  handleLogout = () => {
    // Clear context
    this.context.clearError();
    this.context.clearLogList();
    this.context.clearLog();
    this.context.clearUser();
    // Reset background
    this.context.changeBG("none", "var(--color-main)");
    // Log user out of session and expire their token
    TokenService.clearAuthToken();
    // Stop refresh and idle timers
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  }

  renderLoginLink() {
    return (
      <div className='Header__login navbar'>
          <Link className='nav' to='/' onClick={() => this.context.changeBG("none", "var(--color-main)")}>
            <li>Home</li>
          </Link>
          <Link className='nav' to='/register' onClick={() => this.context.changeBG("none", "var(--color-main)")}>
            <li>Register</li>
          </Link>
      </div>
    );
  }

  renderLogoutLink() {
    // render logout
    return(
      <div className='Header__logout navbar'>
          <Link className='nav' to='/' onClick={() => this.context.changeBG("var(--print)", "var(--color-comp-w)")} ><li>Home</li></Link>
          <Link className='nav' to='/dashboard' onClick={() => this.context.changeBG("var(--print)", "var(--color-comp-w)")} ><li>Dashboard</li></Link>
          <Link className='nav' to='/account' onClick={() => this.context.changeBG("var(--print)", "var(--color-comp-w)")} ><li>Account</li></Link>
          <Link className='nav' onClick={this.handleLogout} to='/'><li>Logout</li></Link>
      </div>
    );
  }

  render() {
    // Return to homepage when h1 is clicked
    return (
      <nav className='Header' id='Header'>
        <header className='Header__container'>
          <div className='Header__logo'>
            <h1>
              <Link to='/'>
                <img className='logo' src={poodIcon} alt='logo'/>
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

