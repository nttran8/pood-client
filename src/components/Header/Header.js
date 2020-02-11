import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

export default class Header extends Component {
  handleLogout = () => {
    // Log user out of session and expire their token
  }

  renderLoginLink() {
    return (
      <div className='Header__login'>
        <Link
          to='/'>
          Home
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    );
  }

  renderLogoutLink() {
    // render logout
    return(
      <div className='Header__logout'>
        <Link
          onClick={this.handleLogout}
          to='/'>
            Logout
        </Link>
      </div>
    )
  }

  render() {
    // Return to homepage when h1 is clicked
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            <img alt='logo'/>
            {' '}
            Poo'd
          </Link>
        </h1>
          {false
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
      </nav>
    );
  }
}

