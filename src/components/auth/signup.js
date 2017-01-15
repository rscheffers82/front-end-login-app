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
          {password.touched && password.error && <div className="error">{password.error}</div>}
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

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Ensure passwords match';
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
