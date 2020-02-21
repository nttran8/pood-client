// Libraries
import React, { Component } from "react";
import { CreateDate } from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";

import "./LogItem.css";

export default class LogList extends Component {
  static contextType = PoodContext;


  render() {
    const { log } = this.props;
    return (
      <li id={log.id}>
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
      {CreateDate(log.date_created)}
    </span>
  );
}
