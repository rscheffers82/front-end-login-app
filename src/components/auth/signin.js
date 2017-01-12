import React, { Component } from 'react';
import reduxForm from 'redux-form';

class Signin extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

var options = {
  form: 'signin',
  fields: ['email', 'password']
}

export default reduxForm(options)(Signin);
// 1st () are for our configuration
// 2nd () are for our component
