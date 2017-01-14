import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit( {email, password} ) {
    console.log(email, password);
    // add code to log the user in
    this.props.signinUser({ email, password });
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

const formConfig = {
  form: 'signin',
  fields: ['email', 'password']
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
};

export default reduxForm(formConfig, mapStateToProps, actions)(Signin);
// 1st () are for our configuration
// 2nd () are for our component
