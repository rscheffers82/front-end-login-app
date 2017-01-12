import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  handleFormSubmit( {email, password} ) {
    console.log(email, password);
    // add code to log the user in
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
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

// const config = {
//   form: 'signin',
//   fields: ['email', 'password']
// };

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
// 1st () are for our configuration
// 2nd () are for our component
