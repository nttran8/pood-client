// Library
import React, { Component } from "react";

// Component
import LogForm from "../../components/LogForm/LogForm";

// Style
import "./NewLogPage.css";

export default class NewLogPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  state = {
    logDate: Date.now()
  };

  handleAddRedirect = () => {
    // Redirect user to dashboard if log is successfully added
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  };

  render() {
    return (
      <section className="NewLogPage">
        <h2>Log the Log</h2>
        <LogForm onSuccess={this.handleAddRedirect} />
      </section>
    );
  }
}
