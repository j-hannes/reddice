import React from 'react'
import { connect } from 'react-redux'

import { login } from '../../actions/authActions'
import Form from '../common/Form'

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
