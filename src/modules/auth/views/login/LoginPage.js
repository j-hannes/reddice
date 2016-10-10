import React from 'react'

import LoginForm from './LoginForm'
import StandardLayout from '../../../../layouts/StandardLayout'

// route component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class LoginPage extends React.Component {
  render() {
    return (
      <StandardLayout>
        <LoginForm />
      </StandardLayout>
    )
  }
}

export default LoginPage
