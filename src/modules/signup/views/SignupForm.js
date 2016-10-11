import React from 'react'
import { connect } from 'react-redux'

import timezones from '../data/timezones'
import Form from '../../../components/common/Form'
import {
  userSignupRequest,
  isUserExists,
} from '../actions'
import {
  addFlashMessage,
} from '../../../actions/flashMessages'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.signup = this.signup.bind(this)
  }

  signup(values, handleServerError) {
    this.props.userSignupRequest(values)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up successfully. Welcome!',
        })
        this.context.router.push('/')
      })
      .catch(handleServerError)
  }

  render() {
    return (
      <Form
        title="Join our community"
        onSubmit={this.signup}
        submitButtonText="Sign up"
        fields={[
          {
            name: 'username',
            label: 'Username',
            required: true,
            onBlur: this.props.isUserExists,
            onBlurError: 'Username already taken',
          },
          {
            name: 'email',
            label: 'Email',
            required: true,
            validateEmail: true,
            onBlur: this.props.isUserExists,
            onBlurError: 'Email already registered',
          },
          {
            name: 'password',
            type: 'password',
            label: 'Password',
            required: true,
          },
          {
            name: 'passwordConfirmation',
            type: 'password',
            label: 'Password Confirmation',
            required: true,
            validateEqualTo: 'password',
          },
          {
            name: 'timezone',
            type: 'select',
            options: timezones,
            defaultOption: 'Choose your timezone',
            label: 'Timezone',
            required: true,
          },
        ]}
      />

    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired,
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default connect(null, {
  userSignupRequest,
  addFlashMessage,
  isUserExists,
})(SignupForm)
