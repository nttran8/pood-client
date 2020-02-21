// Library
import React, { Component } from "react";

// Service
import ApiService from "../../services/api-service";
import { CreateInput, CreateButton, CreateTextarea, CreateTimestamp } from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";

export default class LogForm extends Component {
  static contextType = PoodContext;
  previousContext;

  state = {
    error: null,
  };

  componentDidMount() {
    this.previousContext = this.context;
  }

  componentDidUpdate() {
    if(JSON.stringify(this.previousContext.log) !== JSON.stringify(this.context.log)) {
      return null;
    }
  }

  shouldComponentUpdate() {
    if(this.previousContext.log.id !== this.context.log.id) {
      return true;
    }
    else return false;
  }

  checkEmptyNote = () => {
    return this.state.note
      ? (<CreateTextarea
          className='note' 
          id='note' 
          value={this.context.log.note}
          onChange={this.context.updateNote}
        />)
      : (<CreateTextarea
          className='note' 
          id='note' 
          placeholder='Notes: clean poo and no smell'
          onChange={this.context.updateNote}
        />);
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { log, setLog, logList, updateLogList } = this.context;
    const updateLog = {
      id: log.id,
      nickname: event.currentTarget.nickname.value,
      style: event.currentTarget.style.value,
      color: event.currentTarget.color.value,
      amount: event.currentTarget.amount.value,
      note: event.currentTarget.note.value 
    };
    ApiService.patchLog(updateLog)
      .then(res => {
        setLog(updateLog);
        const i = logList.findIndex(l => l.id === updateLog.id);
        updateLogList(i, updateLog);
      });
  }

  onDelete = () => {
    this.context.removeLog();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          {this.context.log 
            ? CreateTimestamp(this.context.log.date_created) 
            : null}
        </p>
        <label htmlFor='nickname'>nickname</label>
        <CreateInput 
          className='nickname' 
          id='nickname'
          defaultValue={this.context.log ? this.context.log.nickname : ''}
          onChange={this.context.updateNickname}
        />
        <label htmlFor='nickname'></label>
        <div className="style">
          <label name="style">Appearance</label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='1' 
                checked={this.context.log && this.context.log.style === '1'}
                onChange={this.context.updateStyle}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=1" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='2' 
                checked={this.context.log && this.context.log.style === '2'}
                onChange={this.context.updateStyle}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=2" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='3' 
                checked={this.context.log && this.context.log.style === '3'}
                onChange={this.context.updateStyle}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=3" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='4' 
                checked={this.context.log && this.context.log.style === '4'}
                onChange={this.context.updateStyle}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=4" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='5' 
                checked={this.context.log && this.context.log.style === '5'}
                onChange={this.context.updateStyle}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=5" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='6' 
                checked={this.context.log && this.context.log.style === '6'}
                onChange={this.context.updateStyle}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=6" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='7' 
                checked={this.context.log && this.context.log.style === '7'}
                onChange={this.context.updateStyle}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=7" />
          </label>
        </div>
        <div className="color">
          <label name="color">Color</label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="gray" 
                checked={this.context.log && this.context.log.color === 'gray'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/D2D7D3/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="red" 
                checked={this.context.log && this.context.log.color === 'red'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/D24D57/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="yellow" 
                checked={this.context.log && this.context.log.color === 'yellow'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/F3C13A/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="green" 
                checked={this.context.log && this.context.log.color === 'green'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/006442/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="brown" 
                checked={this.context.log && this.context.log.color === 'brown'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/964B00/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="black" 
                checked={this.context.log && this.context.log.color === 'black'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/000000/fff" />
          </label>
        </div>
        <div className="amount">
          <label name="amount">Amount</label>
          <label>
              <input 
                type="radio" 
                name="amount" 
                value="little" 
                checked={this.context.log && this.context.log.amount === 'little'}
                onChange={this.context.updateAmount}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=little" />
          </label>
          <label>
              <input 
                type="radio" 
                name="amount" 
                value="normal" 
                checked={this.context.log && this.context.log.amount === 'normal'}
                onChange={this.context.updateAmount}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=normal" />
          </label>
          <label>
              <input 
                type="radio" 
                name="amount" 
                value="a lot" 
                checked={this.context.log && this.context.log.amount === 'a lot'}
                onChange={this.context.updateAmount}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=alot" />
          </label>
        </div>
        {this.checkEmptyNote()}
        <CreateButton className="logButton" type="submit">Update</CreateButton>
        <CreateButton className="logButton" type="button" onClick={this.onDelete}>Delete</CreateButton>
      </form>
    );
  }
}
