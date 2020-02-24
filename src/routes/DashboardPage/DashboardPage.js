// Libraries
import React, { Component } from "react";

// Components
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
    console.log(this.context.user);
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
