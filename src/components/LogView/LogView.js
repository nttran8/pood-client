// Library
import React, { Component } from "react";

// Service
import ApiService from "../../services/api-service";
import {
  CreateButton,
  CreateTextarea,
  CreateTimestamp,
  StyleDetail
} from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";
import type1 from "../../img/type1.svg";
import type2 from "../../img/type2.svg";
import type3 from "../../img/type3.svg";
import type4 from "../../img/type4.svg";
import type5 from "../../img/type5.svg";
import type6 from "../../img/type6.svg";
import type7 from "../../img/type7.svg";
import gray from "../../img/gray.svg";
import red from "../../img/red.svg";
import yellow from "../../img/yellow.svg";
import green from "../../img/green.svg";
import brown from "../../img/brown.svg";
import black from "../../img/black.svg";

// Style
import "./LogView.css";

export default class LogForm extends Component {
  static contextType = PoodContext;
  previousContext;

  state = {
    error: null
  };

  componentDidMount() {
    this.previousContext = this.context;
  }

  componentDidUpdate() {
    if (
      JSON.stringify(this.previousContext.log) !==
      JSON.stringify(this.context.log)
    ) {
      return null;
    }
  }

  shouldComponentUpdate() {
    if (this.previousContext.log.id !== this.context.log.id) {
      return true;
    } else return false;
  }

  checkEmptyNote = () => {
    return this.context.log.note ? (
      <CreateTextarea
        className="note"
        id="note"
        value={this.context.log ? this.context.log.note : ""}
        onChange={this.context.updateNote}
      />
    ) : (
      <CreateTextarea
        className="note"
        id="note"
        value={this.context.log.note}
        placeholder="Notes: clean poo and no smell"
        onChange={this.context.updateNote}
      />
    );
  };

  onSubmit = event => {
    event.preventDefault();
    const { log, setLog, logList, updateLogList } = this.context;

    // Validate entries
    if (event.currentTarget.nickname.value === "") {
      return alert("Nickname is required");
    }
    if (event.currentTarget.style.value === "") {
      return alert("Appearance is required");
    }
    if (event.currentTarget.color.value === "") {
      return alert("Color is required");
    }
    if (event.currentTarget.amount.value === "") {
      return alert("Amount is required");
    }

    const updateLog = {
      id: log.id,
      nickname: event.currentTarget.nickname.value,
      style: event.currentTarget.style.value,
      color: event.currentTarget.color.value,
      amount: event.currentTarget.amount.value,
      note: event.currentTarget.note.value,
      date_created: log.date_created
    };
    ApiService.patchLog(updateLog).then(res => {
      setLog(updateLog);
      const i = logList.findIndex(l => l.id === updateLog.id);
      updateLogList(i, updateLog);
    });
  };

  onDelete = () => {
    let remove = window.confirm("Are you sure you want to dump the dump?");
    if (remove === true) {
      this.context.removeLog();
    }
    return remove;
  };

  render() {
    return (
      <form className="LogView" onSubmit={this.onSubmit}>
        <p className="timestamp">
          {this.context.log
            ? CreateTimestamp(this.context.log.date_created)
            : null}
        </p>

        <div className="inputForm dataBox">
          <label htmlFor="nickname" className="logLabel">
            Nickname*
          </label>
          <CreateTextarea
            className="nickname"
            id="nickname"
            value={this.context.log ? this.context.log.nickname : ""}
            onChange={this.context.updateNickname}
          />
        </div>

        <div className="dataBox">
          <label htmlFor="style" className="logLabel">
            Appearance*
            <span className="styleDetail">
              {this.context.log ? StyleDetail(this.context.log.style) : ""}
            </span>
          </label>
          <div className="logSelection">
            <label>
              <input
                type="radio"
                name="style"
                value="1"
                checked={this.context.log && this.context.log.style === "1"}
                onChange={this.context.updateStyle}
              />
              <img src={type1} alt="type 1: separate hard lumps" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="2"
                checked={this.context.log && this.context.log.style === "2"}
                onChange={this.context.updateStyle}
              />
              <img src={type2} alt="type 2: lumpy and sausage like" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="3"
                checked={this.context.log && this.context.log.style === "3"}
                onChange={this.context.updateStyle}
              />
              <img src={type3} alt="type 3: sausage shape with cracks" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="4"
                checked={this.context.log && this.context.log.style === "4"}
                onChange={this.context.updateStyle}
              />
              <img src={type4} alt="type 4: smooth soft sausage" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="5"
                checked={this.context.log && this.context.log.style === "5"}
                onChange={this.context.updateStyle}
              />
              <img src={type5} alt="type 5: soft blobs with clear edges" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="6"
                checked={this.context.log && this.context.log.style === "6"}
                onChange={this.context.updateStyle}
              />
              <img src={type6} alt="type 6: mushy consistency" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="7"
                checked={this.context.log && this.context.log.style === "7"}
                onChange={this.context.updateStyle}
              />
              <img src={type7} alt="type 7: liquid consistency" />
            </label>
          </div>
        </div>

        <div className="dataBox">
          <label htmlFor="color" className="logLabel">
            Color*
          </label>
          <div className="color logSelection">
            <label>
              <input
                type="radio"
                name="color"
                value="gray"
                checked={this.context.log && this.context.log.color === "gray"}
                onChange={this.context.updateColor}
              />
              <img src={gray} alt="gray" />
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="red"
                checked={this.context.log && this.context.log.color === "red"}
                onChange={this.context.updateColor}
              />
              <img src={red} alt="red" />
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="yellow"
                checked={
                  this.context.log && this.context.log.color === "yellow"
                }
                onChange={this.context.updateColor}
              />
              <img src={yellow} alt="yellow" />
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="green"
                checked={this.context.log && this.context.log.color === "green"}
                onChange={this.context.updateColor}
              />
              <img src={green} alt="green" />
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="brown"
                checked={this.context.log && this.context.log.color === "brown"}
                onChange={this.context.updateColor}
              />
              <img src={brown} alt="brown" />
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="black"
                checked={this.context.log && this.context.log.color === "black"}
                onChange={this.context.updateColor}
              />
              <img src={black} alt="black" />
            </label>
          </div>
        </div>

        <div className="dataBox">
          <label htmlFor="amount" className="logLabel">
            Amount*
          </label>
          <div className="amount logSelection">
            <input
              id="little"
              type="radio"
              name="amount"
              value="little"
              checked={this.context.log && this.context.log.amount === "little"}
              onChange={this.context.updateAmount}
            />
            <label htmlFor="little">not much</label>

            <input
              type="radio"
              name="amount"
              value="normal"
              id="normal"
              checked={this.context.log && this.context.log.amount === "normal"}
              onChange={this.context.updateAmount}
            />
            <label htmlFor="normal">normal</label>

            <input
              type="radio"
              name="amount"
              value="a lot"
              id="a lot"
              checked={this.context.log && this.context.log.amount === "a lot"}
              onChange={this.context.updateAmount}
            />
            <label htmlFor="a lot">so much</label>
          </div>
        </div>

        <div className="inputForm dataBox">
          <label htmlFor="note" className="logLabel">
            Note
          </label>
          {this.checkEmptyNote()}
        </div>

        <CreateButton className="logButton" type="submit">
          Update
        </CreateButton>
        <CreateButton
          className="logButton"
          type="button"
          onClick={this.onDelete}
        >
          Delete
        </CreateButton>
      </form>
    );
  }
}
