import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBarOptions from './NavBarOptions'



export class NavBar extends Component {
  
  navBarProps = {
    linkStyle: {
      padding: '5px',
      display: 'inline-block',
    }
  }

  render() {

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link style={this.navBarProps.linkStyle} to="/">Tracks</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavBarOptions { ...this.navBarProps } />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}