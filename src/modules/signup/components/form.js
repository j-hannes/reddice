// TODO this file should technically become obsolete
import React from 'react'
import { connect } from 'react-redux'

import config from '../config'
import Form from '../../../containers/Form'

import {
  signup,
  checkUserExists,
} from '../actions'

const SignupForm = ({ signup, checkUserExists }, { router }) =>
  <Form
    {...config.form({
      router,
      actions: {
        signup,
        checkUserExists,
      },
    })}
  />

SignupForm.propTypes = {
  signup: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func.isRequired,
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default connect(null, {
  signup,
  checkUserExists,
})(SignupForm)
