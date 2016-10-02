import React from 'react'
import { Link } from 'react-router'
import NavigationBar from './NavigationBar'
import FlashMessageList from './flash/FlashMessageList'

// top component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ul>
          <li><Link to="/signup" activeStyle={{ color: 'red' }}>Signup</Link></li>
          <li><Link to="/login" activeStyle={{ color: 'red' }}>Login</Link></li>
        </ul>
        <NavigationBar />
        <FlashMessageList />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  // TODO look up what proptypes children should have
  // eslint-disable-next-line react/forbid-prop-types
  children: React.PropTypes.object,
}

export default App
