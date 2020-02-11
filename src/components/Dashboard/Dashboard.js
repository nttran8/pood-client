// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import LogItem from "../../components/LogItem/LogItem";
import LogForm from "../../components/LogForm/LogForm";

// Data
import LogListContext from "../../contexts/LogListContext";

export default class Dashboard extends Component {
  // Set context for class
  static contextType = LogListContext;

  renderLogList() {
    // const {
    //   logList = [{ nickname: "stink", date_created: 1550804582 }]
    // } = this.context;
    const logList = [{ id: 1, nickname: "stink", date_created: 1550804582 }];
    console.log(logList);
    return logList.map(log => <LogItem key={"LogItem__" + log.id} log={log} />);
  }

  render() {
    return (
      <>
        <div className="DashboardPage__left">
          <Link
            to="/log"
          >Add Log
          </Link>
          <ul>{this.renderLogList()}</ul>
        </div>
        <div className="DashboardPage__right">
          <LogForm />
        </div>
      </>
    );
  }
}
