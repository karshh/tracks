import { Component } from 'react';
import React from 'react';
import { ApplicationState } from '../store';
import * as UserStore from '../store/User'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

type UserProps = UserStore.UserState & typeof UserStore.actionCreators 

class Dashboard extends Component<UserProps> {

  componentDidMount() {
    console.log(this.props.loggedIn);
  }
  getChart = () => {
    return [
      {
        "ID": 37498,
        "name": "The Railroad",
        "respect": 267150,
        "timestamp": "2020-03-28T23:28:52"
      },
      {
        "ID": 37498,
        "name": "The Railroad",
        "respect": 267150,
        "timestamp": "2020-03-28T23:29:00"
      },
      {
        "ID": 37498,
        "name": "The Railroad",
        "respect": 267150,
        "timestamp": "2020-03-28T23:29:10"
      }
    ]
  }
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>

        <p>Check out this lovely data!</p>
        <pre>{JSON.stringify(this.getChart(), null, 2)}</pre>
      </div>
    )
  }
}

export default connect(
  (state: ApplicationState) => state.user, // Selects which state properties are merged into the component's props
  UserStore.actionCreators // Selects which action creators are merged into the component's props
)(Dashboard as any);