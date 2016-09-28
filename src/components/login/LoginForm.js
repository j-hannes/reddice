import React from 'react'
import { connect } from 'react-redux'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

import { login } from '../../actions/authActions'
import Form from '../common/Form'

// FIXME
function validateInput(data) {
  const errors = {}

  if (Validator.isNull(data.identifier)) {
    errors.identifier = 'This field is required'
  }

  if (Validator.isNull(data.password)) {
    errors.password = 'This field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login(values, handleServerError) {
    this.props.login(values)
      .then(() => this.context.router.push('/'))
      .catch(handleServerError)
  }

  render() {
    return (
      <Form
        title="Login"
        onSubmit={this.login}
        submitButtonText="Login"
        validateInput={validateInput}
        fields={[
          {
            name: 'identifier',
            label: 'Username / Email',
            required: true,
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            required: true,
          },
        ]}
      />
    )
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired,
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default connect(null, { login })(LoginForm)
