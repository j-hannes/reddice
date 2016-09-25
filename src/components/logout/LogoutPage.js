import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions.js'

class LogoutPage extends React.Component {

  componentWillMount() {
    this.props.logout()
    this.context.router.push('/')
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <p>You are now logged out.</p>
        </div>
      </div>
    )
  }
}

LogoutPage.propTypes = {
  logout: React.PropTypes.func.isRequired,
}

LogoutPage.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default connect(null, {
  logout,
})(LogoutPage)
