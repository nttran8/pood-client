// Library
import React, { Component } from "react";
import moment from "moment";

// Component
import {
  CreateTextarea,
  CreateButton,
  CreateTimestamp,
  StyleDetail
} from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";

// Style
import "./LogForm.css";
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

export default class LogForm extends Component {
  static contextType = PoodContext;

  static defaultProps = {
    onSuccess: () => {}
  };

  state = {
    date_created: new Date(),
    style: ""
  };

  updateStyle = event => {
    // Update the selected type to show user additional details of the selection
    this.setState({ style: event.currentTarget.value });
  };

  onSubmit = event => {
    event.preventDefault();

    // Validate inputs
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

    // Create new log object for submission
    const log = {
      nickname: event.currentTarget.nickname.value,
      style: event.currentTarget.style.value,
      color: event.currentTarget.color.value,
      amount: event.currentTarget.amount.value,
      note: event.currentTarget.note.value,
      date_created: this.state.date_created
    };

    // Post log to database and update context
    this.context.addLog(log);

    // Redirect back to dashboard
    this.props.onSuccess();
  };

  render() {
    return (
      <form className="LogForm" onSubmit={this.onSubmit}>
        <p className="today">
          {CreateTimestamp(moment(this.state.date_created))}
        </p>

        <div className="inputForm dataBox">
          <label htmlFor="nickname" className="logLabel">
            Nickname*
          </label>
          <CreateTextarea
            className="nickname"
            id="nickname"
            placeholder="nickname"
            required
          />
        </div>

        <div className="dataBox">
          <label htmlFor="style" className="logLabel">
            Appearance*
            <span className="styleDetail">
              {this.context.log ? StyleDetail(this.state.style) : ""}
            </span>
          </label>
          <div className="logSelection">
            <label>
              <input
                type="radio"
                name="style"
                value="1"
                onChange={this.updateStyle}
              />
              <img src={type1} alt="type 1: separate hard lumps" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="2"
                onChange={this.updateStyle}
              />
              <img src={type2} alt="type 2: lumpy and sausage like" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="3"
                onChange={this.updateStyle}
              />
              <img src={type3} alt="type 3: sausage shape with cracks" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="4"
                onChange={this.updateStyle}
              />
              <img src={type4} alt="type 4: smooth soft sausage" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="5"
                onChange={this.updateStyle}
              />
              <img src={type5} alt="type 5: soft blobs with clear edges" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="6"
                onChange={this.updateStyle}
              />
              <img src={type6} alt="type 6: mushy consistency" />
            </label>
            <label>
              <input
                type="radio"
                name="style"
                value="7"
                onChange={this.updateStyle}
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
              <input type="radio" name="color" value="gray" />
              <img src={gray} alt="gray" />
            </label>
            <label>
              <input type="radio" name="color" value="red" />
              <img src={red} alt="red" />
            </label>
            <label>
              <input type="radio" name="color" value="yellow" />
              <img src={yellow} alt="yellow" />
            </label>
            <label>
              <input type="radio" name="color" value="green" />
              <img src={green} alt="green" />
            </label>
            <label>
              <input type="radio" name="color" value="brown" />
              <img src={brown} alt="brown" />
            </label>
            <label>
              <input type="radio" name="color" value="black" />
              <img src={black} alt="black" />
            </label>
          </div>
        </div>

        <div className="dataBox">
          <label htmlFor="amount" className="logLabel">
            Amount*
          </label>
          <div className="amount logSelection">
            <input type="radio" name="amount" value="little" id="little" />
            <label htmlFor="little">not much</label>

            <input type="radio" name="amount" value="normal" id="normal" />
            <label htmlFor="normal">normal</label>

            <input type="radio" name="amount" value="a lot" id="a lot" />
            <label htmlFor="a lot">so much</label>
          </div>
        </div>

        <div className="inputForm dataBox">
          <label htmlFor="note" className="logLabel">
            Note
          </label>
          <CreateTextarea
            className="note"
            id="note"
            placeholder="Notes: clean poo and no smell"
          />
        </div>

        <CreateButton className="logButton" type="submit">
          Add
        </CreateButton>
        <CreateButton
          className="logButton"
          type="button"
          onClick={this.props.onSuccess}
        >
          Cancel
        </CreateButton>
      </form>
    );
  }
}
