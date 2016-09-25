import React from 'react'
import SignupForm from './SignupForm'

// route component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class SignupPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm />
        </div>
      </div>
    )
  }
}

export default SignupPage
