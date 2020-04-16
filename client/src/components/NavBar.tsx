import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">Tracks</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/dashboard'>Dashboard</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}