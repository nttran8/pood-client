// Libraries
import React, { Component } from 'react';

// Component
import Account from '../../components/Account/Account';

// Style
import './AccountPage.css';

export default class AccountPage extends Component {
  render() {
    return (
      <section className='AccountPage'>
        <h2>Account Setting</h2>
        <Account />
      </section>
    );
  }
}
