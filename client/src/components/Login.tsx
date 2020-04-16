import { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import React from 'react';



export default class Login extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>API Key</Form.Label>
          <Form.Control type="text" placeholder="Enter API Key" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    )
  }
}