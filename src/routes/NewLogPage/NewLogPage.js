// Libraries
import React, { Component } from 'react';

import { CreateTimestamp } from '../../components/Utils/Utils';

// Component
import LogForm from '../../components/LogForm/LogForm';

export default class NewLogPage extends Component {
  state = {
    logDate: Date.now()
  };

  render() {
    return (
      <section className='NewLogPage'>
        <h2>
          <CreateTimestamp date={this.state.logDate}/>
        </h2>
          <LogForm />
      </section>
    );
  }
}
