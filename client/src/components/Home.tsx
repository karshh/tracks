import { Component } from 'react';
import React from 'react';
import * as UserStore from '../store/User'

type UserProps = UserStore.UserState & typeof UserStore.actionCreators

export default class Home extends Component<UserProps> {
  render() {
    return (
    <p>WELCOME, { this.props.name }</p>
    )
  }
}