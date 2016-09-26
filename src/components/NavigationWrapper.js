import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavigationWrapper = ({ links }) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Red Dice</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {links.map((link, index) =>
          <LinkContainer
            key={index}
            to={{ pathname: link.route }}
          >
            <NavItem>{link.text}</NavItem>
          </LinkContainer>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
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
