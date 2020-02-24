// Library
import React, { Component } from "react";

// Component
import Dashboard from "../../components/Dashboard/Dashboard";

// Data
import PoodContext from "../../contexts/PoodContext";

export default class DashboardPage extends Component {
  // Set context for class
  static contextType = PoodContext;

  componentDidMount() {
    this.context.clearError();
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
