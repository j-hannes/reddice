import React from 'react'
import { connect } from 'react-redux'

import NavigationWrapper from './NavigationWrapper.js'

class NavigationBar extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth

    const userLinks = [
      {
        text: 'New Event',
        route: '/new-event',
      },
      {
        text: 'Logout',
        route: '/logout',
      },
    ]

    const guestLinks = [
      {
        text: 'Sign Up',
        route: '/signup',
      },
      {
        text: 'Login',
        route: '/login',
      },
    ]

    return (
      <NavigationWrapper
        links={isAuthenticated ? userLinks : guestLinks}
      />
    )
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.shape({
    isAuthenticated: React.PropTypes.bool.isRequired,
  }),
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}
export default connect(mapStateToProps)(NavigationBar)
