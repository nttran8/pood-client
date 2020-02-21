// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import LogItem from "../../components/LogItem/LogItem";
import LogView from "../../components/LogView/LogView";

// Data
import PoodContext from "../../contexts/PoodContext";
import { CreateButton } from "../Utils/Utils";

// Style
import "./Dashboard.css";

export default class Dashboard extends Component {
  // Set context for class
  static contextType = PoodContext;

  state = {
    expanded: false
  };

  handleLogClick = (event) => {
    const clickedId = Number(event.target.closest('li').id);
    const log = this.context.logList.find(log => log.id === clickedId);
    this.context.setLog(log);
    this.setState({ expanded: true });
  };

  renderLogList = () => {
    const logList = this.context.logList;
    return logList.map(log =>
      <LogItem 
        key={"LogItem__" + log.id} 
        log={log} 
      />);
  }

  componentDidMount() {
    // Reset error
    this.context.clearError();
    // Fetch user and logs data
    this.context.fetchLogList();
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="DashboardPage__left">
          <CreateButton className="logButton">
            <Link
              to="/log"
              >Add Log
            </Link>
          </CreateButton>
          <ul onClick={this.handleLogClick}>{this.renderLogList()}</ul>
        </div>
        <div className="DashboardPage__right">
          <LogView />
        </div>
      </div>
    );
  }
}
