import React from 'react'
import { connect } from 'react-redux'

import { userLinks, guestLinks } from '../config/navigation.json'

import NavigationWrapper from './NavigationWrapper'

const NavigationBar = props =>
  <NavigationWrapper
    links={props.isAuthenticated ? userLinks : guestLinks}
  />

NavigationBar.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(NavigationBar)
