import { Component } from 'react';
import React from 'react';
import * as UserStore from '../store/User'
import { connect } from 'react-redux';
import { ApplicationState } from '../store';

type UserProps = UserStore.UserState & typeof UserStore.actionCreators

class Home extends Component<UserProps> {
  render() {
    return (
    <p>WELCOME, { this.props.name }</p>
    )
  }
}

export default connect(
  (state: ApplicationState) => state.user, // Selects which state properties are merged into the component's props
  UserStore.actionCreators // Selects which action creators are merged into the component's props
)(Home as any);