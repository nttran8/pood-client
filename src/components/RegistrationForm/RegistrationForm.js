import React, { Component } from 'react';
import { CreateButton, CreateInput } from '../Utils/Utils';
import ApiService from '../../services/api-service';

// Style
import './RegistrationForm.css';
import poodIcon from '../../img/Pood.png';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistration: () => {}
  };

  state = { error: null };
  
  handleSubmit = event => {
    event.preventDefault();
    // Get input
    const { email, username, password } = event.target;
    // Reset error
    this.setState({ error: null });
    // Register user
    ApiService.postUser({
      username: username.value.toLowerCase(),
      email: email.value.toLowerCase(),
      password: password.value
    })
      .then(user => {
        // Empty form
        email.value = '';
        username.value = '';
        password.value = '';

        // Redirect to homepage if login is succesful
        this.props.onRegistration();
      })
      .catch(res => this.setState({ error: res.error }));
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <div className='RegistrationForm__logoBox'>
            <img className='RegistrationForm__logo' src={poodIcon} alt='logo'/>
        </div>
        <form 
          className='RegistrationForm'
          onSubmit={this.handleSubmit}
        >
          <div className='formBox'>
            <h2>Create Account</h2>
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            <div className='RegistrationForm__credential'>

              <div className='inputBox'>
                <i className="fas fa-lock"></i>
                <CreateInput 
                  className='username' 
                  id='username' 
                  placeholder='username'
                  required 
                />
              </div>

              <div className='inputBox'>
                <i className="fas fa-envelope"></i>
                <CreateInput 
                  className='email' 
                  id='email' 
                  placeholder='email'
                  pattern='([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))'
                  required
                />
              </div>

              <div className='inputBox'>
                <i className="fas fa-lock"></i>
                <CreateInput 
                  type='password'
                  className='password' 
                  id='password' 
                  placeholder='password'
                  pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&]).{8,12}$'
                  minLength='9'
                  maxLength='72'
                  required 
                />
              </div>
              
            </div>
            <CreateButton type='submit'>
              Register
            </CreateButton>
            <CreateButton className='hideButton' type='button' onClick={this.props.onRegistration}>
              Back
            </CreateButton>
          </div>
        </form>  
      </>
    );
  }
}
