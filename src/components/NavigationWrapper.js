import React from 'react'
import { Link } from 'react-router'

const NavigationWrapper = ({ links }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">Red Dice</Link>
      </div>
      <div
        className="collapse navbar-collapse"
        id="navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          {links.map((link, index) =>
            <li key={index}>
              <Link to={link.route}>{link.text}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
)

NavigationWrapper.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      route: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    })
  ),
}

export default NavigationWrapper
