// Libraries
import React, { Component } from 'react';
import { CreateButton } from '../../components/Utils/Utils';

export default class NotFoundPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleHomePageRedirect = () => {
    // 
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <section className='NotFoundPage'>
        <h2>404</h2>
        <p>Poop. There's nothing here...</p>
        <CreateButton onClick={this.handleHomePageRedirect}>Back to home</CreateButton>
      </section>
    );
  }
}
