import React, { Component } from 'react';
import { CreateButton, CreateInput } from '../Utils/Utils';

export default class Account extends Component {
  static defaultProps = {
    onRegistration: () => {}
  };

  state = { error: null };
  
  handleSubmit = event => {
    event.preventDefault();
    // Get input
    const { fullname, email, username, phone, birthday, gender } = event.target;

    // Validate user
  };

  render() {
    const { error } = this.state;
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
              <CreateInput 
                className='username' 
                id='username' 
                placeholder='username' 
                required
              >
              </CreateInput>
              <CreateInput 
                className='fullname' 
                id='fullname' 
                placeholder='full name'>
              </CreateInput>
            </fieldset>
            <fieldset className='AccountForm__personal-info'>
              <legend>Personal Information</legend>
              <CreateInput 
                className='birthday' 
                id='birthday' 
                placeholder='birthday'>
              </CreateInput>
              <fieldset className='AccountForm__gender'>
                <legend>Gender:</legend>
                <CreateInput 
                  type="radio" 
                  id="female" 
                  name="female">
                </CreateInput>
                <label htmlFor="female">female</label><br/>
                <CreateInput 
                  type="radio" 
                  id="male" 
                  name="male">
                </CreateInput>
                <label htmlFor="male">male</label><br/>
              </fieldset>
            </fieldset>
            <fieldset className='AccountForm__contact-info'>
              <legend>Contact Information</legend>
              <CreateInput className='email' id='email' placeholder='email' required>
              </CreateInput>
              <CreateInput className='oldPassword' id='oldPassword' placeholder='old password' required>
              </CreateInput>
              <CreateInput className='password' id='password' placeholder='password' required>
              </CreateInput>
              <CreateInput className='confirmPassword' id='confirmPassword' placeholder='confirmed password' required>
              </CreateInput>
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