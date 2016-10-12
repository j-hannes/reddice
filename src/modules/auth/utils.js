import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// FIXME direct access of other modules is bad
import { addFlashMessage } from '../flash-messages/actions'

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common.Authorization
  }
}

export function requireAuth(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page',
        })
        this.context.router.push('/login')
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/')
      }
    }
    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  }

  return connect(mapStateToProps, {
    addFlashMessage,
  })(Authenticate)
}
