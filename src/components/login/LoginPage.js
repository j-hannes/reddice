import React from 'react'
import LoginForm from './LoginForm'

// route component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage
