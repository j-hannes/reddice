import React from 'react'
import { connect } from 'react-redux'

import StandardLayout from '../../../layouts/StandardLayout'
import { logout } from '../actions'

class LogoutPage extends React.Component {

  componentWillMount() {
    this.props.logout()
    this.context.router.push('/')
  }

  render() {
    return (
      <StandardLayout>
        <p>You are now logged out.</p>
      </StandardLayout>
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
