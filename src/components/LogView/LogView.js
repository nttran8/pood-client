// Library
import React, { Component } from "react";

// Service
import ApiService from "../../services/api-service";
import { CreateInput, CreateButton, CreateTextarea, CreateTimestamp } from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";
import type1 from "../../img/type1.svg";
import type2 from "../../img/type2.svg";
import type3 from "../../img/type3.svg";
import type4 from "../../img/type4.svg";
import type5 from "../../img/type5.svg";
import type6 from "../../img/type6.svg";
import type7 from "../../img/type7.svg";

// Style
import './LogView.css';

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
      <form className='LogView' onSubmit={this.onSubmit}>
        <p className='timestamp'>
          {this.context.log 
            ? CreateTimestamp(this.context.log.date_created) 
            : null}
        </p>

        <div className='inputForm'>
          <label htmlFor='nickname'>Nickname</label>
          <CreateInput 
            className='nickname' 
            id='nickname'
            defaultValue={this.context.log ? this.context.log.nickname : ''}
            onChange={this.context.updateNickname}
          />
        </div>
        
        <label name="style">Appearance</label>
        <div className="style">
          <label>
              <input 
                type="radio" 
                name="style" 
                value='1' 
                checked={this.context.log && this.context.log.style === '1'}
                onChange={this.context.updateStyle}
              />
              <img src={type1} alt='type 1: separate hard lumps' />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='2' 
                checked={this.context.log && this.context.log.style === '2'}
                onChange={this.context.updateStyle}
              />
              <img src={type2} alt='type 2: lumpy and sausage like'/>
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='3' 
                checked={this.context.log && this.context.log.style === '3'}
                onChange={this.context.updateStyle}
              />
              <img src={type3} alt='type 3: sausage shape with cracks' />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='4' 
                checked={this.context.log && this.context.log.style === '4'}
                onChange={this.context.updateStyle}
              />
              <img src={type4} alt='type 4: smooth soft sausage' />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='5' 
                checked={this.context.log && this.context.log.style === '5'}
                onChange={this.context.updateStyle}
              />
              <img src={type5} alt='type 5: soft blobs with clear edges'/>
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='6' 
                checked={this.context.log && this.context.log.style === '6'}
                onChange={this.context.updateStyle}
              />
              <img src={type6} alt='type 6: mushy consistency'/>
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='7' 
                checked={this.context.log && this.context.log.style === '7'}
                onChange={this.context.updateStyle}
              />
              <img src={type7} alt='type 7: liquid consistency' />
          </label>
        </div>


        <label name="color">Color</label>
        <div className="color">
          <label>
              <input 
                type="radio" 
                name="color" 
                value="gray" 
                checked={this.context.log && this.context.log.color === 'gray'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/D2D7D3/fff" alt='gray' />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="red" 
                checked={this.context.log && this.context.log.color === 'red'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/D24D57/fff" alt='red'/>
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="yellow" 
                checked={this.context.log && this.context.log.color === 'yellow'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/F3C13A/fff" alt='yellow' />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="green" 
                checked={this.context.log && this.context.log.color === 'green'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/006442/fff" alt='green' />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="brown" 
                checked={this.context.log && this.context.log.color === 'brown'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/964B00/fff" alt='brown' />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="black" 
                checked={this.context.log && this.context.log.color === 'black'}
                onChange={this.context.updateColor}
              />
              <img src="http://placehold.it/40x60/000000/fff" alt='black' />
          </label>
        </div>

        <label name="amount ">Amount</label>
        <div className="amount">
          <label>
              <input 
                type="radio" 
                name="amount" 
                value="little" 
                checked={this.context.log && this.context.log.amount === 'little'}
                onChange={this.context.updateAmount}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=little" alt='little' />
          </label>
          <label>
              <input 
                type="radio" 
                name="amount" 
                value="normal" 
                checked={this.context.log && this.context.log.amount === 'normal'}
                onChange={this.context.updateAmount}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=normal"  alt='normal' />
          </label>
          <label>
              <input 
                type="radio" 
                name="amount" 
                value="a lot" 
                checked={this.context.log && this.context.log.amount === 'a lot'}
                onChange={this.context.updateAmount}
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=alot"  alt='a lot'/>
          </label>
        </div>

        {this.checkEmptyNote()}
        <CreateButton className="logButton" type="submit">Update</CreateButton>
        <CreateButton className="logButton" type="button" onClick={this.onDelete}>Delete</CreateButton>
      </form>
    );
  }
}
