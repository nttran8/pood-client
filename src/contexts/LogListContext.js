// Libraries
import React, { Component } from "react";

// Create context
const LogListContext = React.createContext({
  logList: [],
  log: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setLogList: () => {},
  setLog: () => {},
  clearLog: () => {}
});

export default LogListContext;

// Provide log list context
export class LogListProvider extends Component {
  state = {
    logList: [],
    log: {},
    error: null
  };

  setLog = log => {
    this.setState({ log });
  };

  clearLog = () => {
    this.setState({ log: {} });
  };

  setLogList = logList => {
    this.setState({ logList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      logList: this.state.logList,
      log: this.state.log,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLogList: this.setLogList,
      setLog: this.setLog,
      clearLog: this.clearLog
    };

    // Provide access to context to all nested components
    return (
      <LogListContext.Provider value={value}>
        {this.props.children}
      </LogListContext.Provider>
    );
  }
}
