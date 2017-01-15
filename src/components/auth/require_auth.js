import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    // make the router object available on the Authentication class, not just an instance of it.
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render () {
      // console.log('Authenticated: ', this.props.authenticated);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    }
  }

  return connect(mapStateToProps)(Authentication);
}
