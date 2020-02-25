// Library
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import LogItem from "../../components/LogItem/LogItem";
import LogView from "../../components/LogView/LogView";
import { CreateButton } from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";

// Style
import "./Dashboard.css";

export default class Dashboard extends Component {
  static contextType = PoodContext;

  state = {
    expanded: false
  };

  handleLogClick = event => {
    // Show log details when clicked
    if (event.target.closest("li") !== null) {
      const clickedId = Number(event.target.closest("li").id);
      const log = this.context.logList.find(log => log.id === clickedId);
      this.context.setLog(log);
      this.setState({ expanded: true });
    }
    // Does nothing if an item is not clicked
    else return null;
  };

  renderLogList = () => {
    const { logList } = this.context;

    if (logList.length === 0) {
      return "Poop, your list is empty.";
    }

    // Print each log on the list
    return logList.map(log => (
      <LogItem
        key={"LogItem__" + log.id}
        log={log}
        expand={
          log.id === this.context.log.id && this.state.expanded === true
            ? true
            : false
        }
      />
    ));
  };

  componentDidMount() {
    // Reset error and fetch data and logs when component mount
    this.context.clearError();
    this.context.fetchLogList();
  }

  checkForEmptyList = () => {
    return this.context.logList && this.context.logList.length > 0 ? (
      <LogView />
    ) : null;
  };

  render() {
    return (
      <div className="Dashboard">
        <div className="DashboardPage__left">
          <Link to="/log">
            <CreateButton className="logButton">Add Log</CreateButton>
          </Link>
          <ul onClick={this.handleLogClick}>{this.renderLogList()}</ul>
        </div>
        <div className="DashboardPage__right">{this.checkForEmptyList()}</div>
      </div>
    );
  }
}
