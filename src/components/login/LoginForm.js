import React from 'react'
import { connect } from 'react-redux'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'


import TextFieldGroup from '../common/TextFieldGroup'
import { login } from '../../actions/authActions'

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
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.login(this.state).then(
        () => this.context.router.push('/'),
        ({ response }) =>
          this.setState({
            errors: response.data.errors,
            isLoading: false,
          })
      )
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state)
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        { errors.form &&
          <div className="alert alert-danger">
            {errors.form}
          </div>
        }

        <TextFieldGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
          <button
            className="btn btn-primary btn-lg"
            disabled={isLoading}
          >
            Login
          </button>
        </div>
      </form>
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