import { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import React from 'react';
import * as UserStore from '../store/User'
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Redirect } from 'react-router-dom';
export interface LoginState {
  key: string;
}

type LoginProps = UserStore.UserState & typeof UserStore.actionCreators

class Login extends Component<LoginProps, LoginState> {
  
  constructor(props: any) {
    super(props);
    this.state = { key: '' };
  }
  
  handleChange = (event: any) => {
    if (!event) return;
    let key = event.target.value;
    this.setState({ key })
  }

  handleSubmit = async (event: any) => {
      this.props.login(this.state.key);
      event.preventDefault();

  }

  render() {
    
    if (this.props.loginStatus == UserStore.LoginStatus.LoggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <Form>
        <Form.Group controlId="key">
          <Form.Label>API Key</Form.Label>
          <Form.Control type="text" value={this.state.key} onChange={this.handleChange}  />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default connect(
  (state: ApplicationState) => state.user, // Selects which state properties are merged into the component's props
  UserStore.actionCreators // Selects which action creators are merged into the component's props
)(Login as any);
