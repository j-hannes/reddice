import React from 'react'

// route component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  // ... and:
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="jumbotron">
        <h1>Hi!!?</h1>
      </div>
    )
  }
}

export default Home
