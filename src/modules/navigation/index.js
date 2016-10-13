import React from 'react'
import { connect } from 'react-redux'

import { userLinks, guestLinks } from './config.json'

import NavigationWrapper from './components/NavigationWrapper'

const NavigationBar = props =>
  <NavigationWrapper
    links={props.isAuthenticated ? userLinks : guestLinks}
  />

NavigationBar.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.getIn(['auth', 'isAuthenticated']),
})

export default connect(mapStateToProps)(NavigationBar)
