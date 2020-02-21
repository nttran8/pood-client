import React, { Component } from 'react';
import { CreateButton, CreateInput } from '../Utils/Utils';
import PoodContext from '../../contexts/PoodContext';

export default class Account extends Component{
  static contextType = PoodContext;
  static defaultProps = {
    onRegistration: () => {}
  };

  state = { 
    error: null
  };
  
  handleSubmit = event => {
    event.preventDefault();
    // Get input
    const user = {
      id: this.context.user.id,
      fullname: event.currentTarget.fullname.value,
      email: event.currentTarget.email.value,
      username: event.currentTarget.username.value,
      gender: event.currentTarget.gender.value
    };
    this.context.updateUser(user);
  };

  componentDidMount() {
    // Reset error
    this.context.clearError();
    // Fetch user and logs data
    this.context.fetchLogList();
  }

  updateGender = event => {
    this.context.setUser({
      ...this.context.user,
      gender: event.currentTarget.value});
  }

  render() {
    const { error } = this.state;
    const { fullname, email, username, gender } = this.context.user;
    return (
      <>
        <div className='Account__profile-img'>
        </div>
        <form 
          className='AccountForm'
          onSubmit={this.handleSubmit}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='AccountForm__credential'>
            <fieldset className='AccountForm__general-info'>
              <legend>General Information</legend>
              <label htmlFor='username'>username</label>
              <CreateInput 
                className='username' 
                id='username'
                defaultValue={username}
                readOnly
                onClick={() => this.setState({ error: 'Cannot change username'})}
              />
              <label htmlFor='fullname'>fullname</label>
              <CreateInput 
                className='fullname' 
                id='fullname' 
                defaultValue={fullname}
              />
              <fieldset className='AccountForm__gender'>
                <legend>Gender:</legend>
                <CreateInput 
                  type="radio" 
                  id="female" 
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={this.updateGender}
                />
                <label htmlFor="female">female</label><br/>
                <CreateInput 
                  type="radio" 
                  id="male" 
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={this.updateGender}
                />
                <label htmlFor="male">male</label><br/>
              </fieldset>
            </fieldset>
            <fieldset className='AccountForm__contact-info'>
              <legend>Contact Information</legend>
              <label htmlFor='email'>email</label>
              <CreateInput 
                className='email'
                id='email'
                defaultValue={email}
                required
              />
              <label htmlFor='oldPassword'>old password</label>
              <CreateInput 
                className='oldPassword'
                id='oldPassword'
              />
              <label htmlFor='password'>password</label>
              <CreateInput
                className='password'
                id='password'
              />
              <label htmlFor='confirmedPassword'>confirmed password</label>
              <CreateInput
                className='confirmedPassword'
                id='confirmedPassword'
              />
            </fieldset>
          </div>
          <CreateButton type='submit'>
            Change
          </CreateButton>
        </form>  
      </>
    );
  }
}