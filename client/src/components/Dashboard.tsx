import { Component } from 'react';
import React from 'react';

interface Account {
  username: string
}

export default class Dashboard extends Component<Account, any> {

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
        <p>Welcome, { this.props.username }!</p>

        <p>Check out this lovely data!</p>
        <pre>{JSON.stringify(this.getChart(), null, 2) }</pre>
      </div>
    )
  }
}