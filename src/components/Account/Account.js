import React, { Component } from 'react';
import { CreateButton, CreateInput } from '../Utils/Utils';
import PoodContext from '../../contexts/PoodContext';

// Style
import './Account.css';

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

    console.log(this.context.user);
    // Validate data
    if (event.currentTarget.email.value === '') {
      return alert('Email is required');
    }
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
            {error && <p className='red accountError'>{error}</p>}
          </div>

            <div className='inputForm dataBox'>
              <label className='accountLabel' htmlFor='username'>Username</label>
              <CreateInput 
                className='acc-username' 
                id='username'
                defaultValue={username}
                readOnly
                onClick={() => this.setState({ error: 'Cannot change username'})}
              />
            </div>

            <div className='inputForm dataBox'>
              <label className='accountLabel' htmlFor='fullname'>Fullname</label>
              <CreateInput 
                className='fullname' 
                id='fullname' 
                defaultValue={fullname ? fullname : ''}
              />
            </div>

            <div className='dataBox'>
                <label className='accountLabel'>Gender</label>
                <div className='genderSelection'>
                  <CreateInput 
                    type="radio" 
                    id="female" 
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={this.updateGender}
                  />
                  <label htmlFor="female">female</label>
                  <CreateInput 
                    type="radio" 
                    id="male" 
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={this.updateGender}
                  />
                  <label htmlFor="male">male</label>
                </div>
            </div>

            <div className='inputForm dataBox'>
              <label className='accountLabel' htmlFor='email'>Email*</label>
              <CreateInput 
                className='email'
                id='email'
                defaultValue={email}
                required
              />
            </div>

              {/* <label htmlFor='oldPassword'>Old Password</label>
              <CreateInput 
                className='oldPassword'
                id='oldPassword'
              />
              <label htmlFor='password'>Password</label>
              <CreateInput
                className='password'
                id='password'
              />
              <label htmlFor='confirmedPassword'>Confirmed Password</label>
              <CreateInput
                className='confirmedPassword'
                id='confirmedPassword'
              /> */}

          <CreateButton className='accountButton' type='submit'>
            Update
          </CreateButton>

        </form>  
      </>
    );
  }
}