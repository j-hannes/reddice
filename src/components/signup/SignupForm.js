import React from 'react'
import { connect } from 'react-redux'

import timezones from '../../data/timezones'
import Form from '../common/Form'
import {
  userSignupRequest,
  isUserExists,
} from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashMessages'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.signup = this.signup.bind(this)
    this.checkUserExists = this.checkUserExists.bind(this)
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

  checkUserExists(e) {
    const field = e.target.name
    const val = e.target.value
    if (val !== '') {
      this.props.isUserExists(val).then((res) => {
        const errors = this.state.errors
        let invalid
        if (res.data.user) {
          errors[field] = `There is user with such ${field}`
          invalid = true
        } else {
          errors[field] = ''
          invalid = false
        }
        this.setState({ errors, invalid })
      })
    }
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
            // TODO: checkUserExists
          },
          {
            name: 'email',
            label: 'Email',
            required: true,
            validateEmail: true,
            // TODO: checkUserExists
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
