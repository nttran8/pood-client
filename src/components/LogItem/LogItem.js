// Library
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component
import { CreateDate } from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";

// Style
import "./LogItem.css";

export default class LogList extends Component {
  static contextType = PoodContext;

  render() {
    const { log, expand } = this.props;

    // New feature to be developed in future
    // Show details in list when in mobile view
    if (expand) {
      return (
        <li id={log.id}>
          <header className="LogList__header">
            <span className="LogList__nickname">{log.nickname}</span>
            <FontAwesomeIcon icon="poop" />
          </header>
          <footer className="LogList__footer">
            <LogDate log={log} />
          </footer>
        </li>
      );
    } else
      return (
        <li id={log.id}>
          <header className="LogList__header">
            <span className="LogList__nickname">{log.nickname}</span>
            <FontAwesomeIcon icon="poop" />
          </header>
          <footer className="LogList__footer">
            <LogDate log={log} />
          </footer>
        </li>
      );
  }
}

function LogDate({ log }) {
  return <span className="LogList__date">{CreateDate(log.date_created)}</span>;
}
