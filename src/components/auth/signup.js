import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit() {
    console.log('handle form submit');
    // this.props.signupUser({ email, password, passwordConfirm });
  }
  render(){
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit( this.handleFormSubmit.bind(this) )}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email}/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" {...password}/>
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password:</label>
          <input type="password" className="form-control" {...passwordConfirm}/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

const config = {
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}

export default reduxForm(config,mapStateToProps,actions)(Signup);
