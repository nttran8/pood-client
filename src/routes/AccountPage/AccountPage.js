// Libraries
import React, { Component } from 'react';

// Component
import Account from '../../components/Account/Account';

export default class AccountPage extends Component {
  render() {
    return (
      <section className='AccountPage'>
        <h2>User's Name</h2>
        <Account />
      </section>
    );
  }
}
