import React from 'react'
import NavigationBar from './NavigationBar'
import FlashMessageList from './flash/FlashMessageList'

// top component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessageList />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object,
}

export default App
