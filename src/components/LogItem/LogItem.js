// Libraries
import React, { Component } from "react";
import { CreateDate } from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";

import "./LogItem.css";

export default class LogList extends Component {
  static contextType = PoodContext;


  render() {
    const { log, expand } = this.props;
    if (expand) {
      return (
        <li id={log.id}>
        <header className="LogList__header">
          <span className="LogList__nickname">{log.nickname}</span>
          <i className="fas fa-poop"></i>
        </header>
        <footer className="LogList__footer">
          <LogDate log={log} />
        </footer>
      </li>
      )
    }
    else return (
      <li id={log.id}>
        <header className="LogList__header">
          <span className="LogList__nickname">{log.nickname}</span>
          <i className="fas fa-poop"></i>
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
      {CreateDate(log.date_created)}
    </span>
  );
}
