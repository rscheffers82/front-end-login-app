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
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" {...password}/>
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password:</label>
          <input type="password" className="form-control" {...passwordConfirm}/>
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

function validate(formProps) {
  // this function is called whenever one of the fields is changed or loses focus or when the form is loaded or submitted.
  // minimum requirements are that a errors object is defined and returned
  // the errors object returned, adds an error object to each form name, eg. password field error is password.error, email = email.error
  const errors = {};
  const emailRegex = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,7}$/;

  if (!formProps.email) errors.email = "Please provide an email";
  if (formProps.email) {
    if (formProps.email.toUpperCase().search(emailRegex) == -1 ) errors.email = "Please provide a valid email";
  }
  if (!formProps.password) errors.password = "Please provide a password";
  if (!formProps.passwordConfirm) errors.passwordConfirm = "Please confirm your password";

  if (formProps.passwordConfirm !== formProps.password) {
    errors.passwordConfirm = 'Ensure passwords match';
  }

  return errors;
}

const config = {
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}

export default reduxForm(config,mapStateToProps,actions)(Signup);
