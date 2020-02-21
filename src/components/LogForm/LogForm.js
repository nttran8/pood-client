// Library
import React, { Component } from "react";

// Service
import { CreateInput, CreateButton, CreateTimestamp } from "../Utils/Utils";

// Data
import PoodContext from "../../contexts/PoodContext";

export default class LogForm extends Component {
  static contextType = PoodContext;

  static defaultProps = {
    onSuccess: () => {}
  };

  state = {
    date_created: new Date()
  };  

  onSubmit = event => {
    event.preventDefault();
    const log = {
      nickname: event.currentTarget.nickname.value,
      style: event.currentTarget.style.value,
      color: event.currentTarget.color.value,
      amount: event.currentTarget.amount.value,
      note: event.currentTarget.note.value,
      date_created: this.state.date_created
    };
    this.context.addLog(log);
    this.props.onSuccess();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          {CreateTimestamp(this.state.date_created)}
        </p>
        <label htmlFor='nickname'>nickname</label>
        <CreateInput 
          className='nickname' 
          id='nickname'
          placeholder='nickname'
          required
        />
        <label htmlFor='nickname'></label>
        <div className="style">
          <label name="style">Appearance</label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='1'
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=1" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='2' 
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=2" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='3' 
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=3" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='4'
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=4" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='5' 
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=5" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='6'
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=6" />
          </label>
          <label>
              <input 
                type="radio" 
                name="style" 
                value='7'
                required
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
                required
              />
              <img src="http://placehold.it/40x60/D2D7D3/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="red"
                required
              />
              <img src="http://placehold.it/40x60/D24D57/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="yellow"
                required
              />
              <img src="http://placehold.it/40x60/F3C13A/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="green"
                required
              />
              <img src="http://placehold.it/40x60/006442/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="brown"
                required
              />
              <img src="http://placehold.it/40x60/964B00/fff" />
          </label>
          <label>
              <input 
                type="radio" 
                name="color" 
                value="black"
                required
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
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=little" />
          </label>
          <label>
              <input 
                type="radio" 
                name="amount" 
                value="normal"
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=normal" />
          </label>
          <label>
              <input 
                type="radio" 
                name="amount" 
                value="a lot"
                required
              />
              <img src="http://placehold.it/40x60/0bf/fff&text=alot" />
          </label>
        </div>
        <CreateInput 
          className='note' 
          id='note' 
          placeholder='Notes: clean poo and no smell'
        />
        <CreateButton type="submit">Add</CreateButton>
        <CreateButton type="button" onClick={this.props.onSuccess}>Cancel</CreateButton>
      </form>
    );
  }
}
