// Libraries
import React, { Component } from "react";
import { CreateInput, CreateButton } from "../Utils/Utils";

// Data
import LogListContext from "../../contexts/LogListContext";

export default class LogForm extends Component {
  static contextType = LogListContext;

  static defaultProps = {
    onAddLog: () => {}
  };

  state = { error: null };

  handleAddLog = event => {
    event.preventDefault();
    const { nickname, type, color, amount, note } = event.target;
  }

  render() {
    return (
      <form>
        <CreateInput className='nickname' id='nickname' placeholder='nickname'>
        </CreateInput>
        <div class="type">
            <select aria-label="select a type" name="type" id="type">
                <option value="0">Select an amount</option>
                <option value="1"><img alt="type 1"/></option>
                <option value="2"><img alt="type 2"/></option>
                <option value="3"><img alt="type 3"/></option>
                <option value="4"><img alt="type 4"/></option>
                <option value="5"><img alt="type 5"/></option>
                <option value="6"><img alt="type 6"/></option>
                <option value="7"><img alt="type 7"/></option>
            </select>
          </div>
        <CreateInput className='note' id='note' placeholder='Notes: clean poo and no smell'>
        </CreateInput>
      </form>
    );
  }
}
