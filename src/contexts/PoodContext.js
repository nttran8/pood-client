// Libraries
import React, { Component } from "react";

// Service
import ApiService from "../services/api-service";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";

// Create context
const PoodContext = React.createContext({
  logList: [],
  log: {},
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  clearLogList: () => {},
  updateLogList: () => {},
  removeLog: () => {},
  setLog: () => {},
  clearLog: () => {},
  updateNickname: () => {},
  updateStyle: () => {},
  updateColor: () => {},
  updateAmount: () => {},
  updateNote: () => {},
  addLog: () => {},
  setUser: () => {},
  updateUser: () => {},
  clearUser: () => {},
  fetchLogList: () => {},
  handleLogout: () => {}
});

export default PoodContext;

export class PoodProvider extends Component {
  state = {
    logList: [],
    log: {},
    user: {},
    error: null
  };

  setUser = user => {
    this.setState({ user });
  };

  updateUser = user => {
    this.setState({ user });
  };

  clearUser = () => {
    this.setState({ user: {} });
  };

  addLog = log => {
    ApiService.postLog(log).then(newLog =>
      this.setState({
        logList: [newLog, ...this.state.logList],
        log: newLog
      })
    );
  };

  setLog = log => {
    this.setState({ log });
  };

  updateNickname = event => {
    this.setState({
      log: {
        ...this.state.log,
        nickname: event.currentTarget.value
      }
    });
  };

  updateStyle = event => {
    this.setState({
      log: {
        ...this.state.log,
        style: event.currentTarget.value
      }
    });
  };

  updateColor = event => {
    this.setState({
      log: {
        ...this.state.log,
        color: event.currentTarget.value
      }
    });
  };

  updateAmount = event => {
    this.setState({
      log: {
        ...this.state.log,
        amount: event.currentTarget.value
      }
    });
  };

  updateNote = event => {
    this.setState({
      log: {
        ...this.state.log,
        note: event.currentTarget.value
      }
    });
  };

  clearLog = () => {
    this.setState({ log: {} });
  };

  clearLogList = () => {
    this.setState({ logList: [] });
  };

  updateLogList = (i, updatedLog) => {
    let logList = this.state.logList;
    logList[i] = updatedLog;
    this.setState({ logList });
  };

  removeLog = () => {
    ApiService.deleteLog(this.state.log.id)
      .then(() => {
        this.setState({
          logList: this.state.logList.filter(
            log => log.id !== this.state.log.id
          )
        });
      })
      .then(() => {
        this.setState({ log: this.state.logList[0] });
      });
  };

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  fetchLogList = () => {
    ApiService.getUserLogs()
      .then(res => {
        res.logs.sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        );
        this.setState({ user: res.user });
        this.setState({ logList: res.logs });
        this.setState({ log: res.logs[0] });
      })
      .catch(error => this.setState({ error }));
  };

  handleLogout = () => {
    // Clear data on logout
    this.clearError();
    this.clearLogList();
    this.clearLog();
    this.clearUser();
    // Expire user token
    TokenService.clearAuthToken();
    // Remove token refresh and idle timers
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  render() {
    const value = {
      logList: this.state.logList,
      log: this.state.log,
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      clearLogList: this.clearLogList,
      updateLogList: this.updateLogList,
      removeLog: this.removeLog,
      setLog: this.setLog,
      clearLog: this.clearLog,
      updateNickname: this.updateNickname,
      updateStyle: this.updateStyle,
      updateColor: this.updateColor,
      updateAmount: this.updateAmount,
      updateNote: this.updateNote,
      addLog: this.addLog,
      setUser: this.setUser,
      updateUser: this.updateUser,
      clearUser: this.clearUser,
      fetchLogList: this.fetchLogList,
      handleLogout: this.handleLogout
    };

    // Provide access to context to all nested components
    return (
      <PoodContext.Provider value={value}>
        {this.props.children}
      </PoodContext.Provider>
    );
  }
}
