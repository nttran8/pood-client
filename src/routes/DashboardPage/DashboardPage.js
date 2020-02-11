// Libraries
import React, { Component } from "react";

// Components
import Dashboard from "../../components/Dashboard/Dashboard";

// Data
import LogListContext from "../../contexts/LogListContext";


export default class DashboardPage extends Component {
  // Set context for class
  static contextType = LogListContext;

  componentDidMount() {
    this.context.clearError();
    // API service here
  }

  render() {
    const { error } = this.context;
    return (
      <section className="DashboardPage">
        {error ? (
          <p className="red">Poop. There was an error!</p>
        ) : (
          <Dashboard />
        )}
      </section>
    );
  }
}
