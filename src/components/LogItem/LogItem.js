// Libraries
import React, { Component } from "react";
import { CreateDate } from "../Utils/Utils";

// Data
import LogListContext from "../../contexts/LogListContext";

import "./LogItem.css";

export default class LogList extends Component {
  static contextType = LogListContext;

  handleLogClick = e => {
    const { logList } = this.context;
    const foundLog = logList.find(log => log.id === e.currentTarget.id);
    // const foundLog = this.context.LogList.find(
    //   log => log.id === e.currentTarget.id
    // );
    console.log(foundLog);
    // this.context.setLog({});
  };

  render() {
    const { log } = this.props;
    return (
      <li id={log.id} onClick={this.handleLogClick}>
        <header className="LogList__header">
          <h2 className="LogList__nickname">{log.nickname}</h2>
        </header>
        <footer className="LogList__footer">
          <LogDate log={log} />
        </footer>
      </li>
    );
  }
}

function LogDate({ log }) {
  return (
    <span className="LogList__date">
      <CreateDate date={log.date_created} />
    </span>
  );
}
