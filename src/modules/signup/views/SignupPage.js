import React from 'react'
import SignupForm from './SignupForm'
import StandardLayout from '../../../layouts/StandardLayout'

// route component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class SignupPage extends React.Component {
  render() {
    return (
      <StandardLayout>
        <SignupForm />
      </StandardLayout>
    )
  }
}

export default SignupPage
