import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import * as UserStore from './store/User'
import { ApplicationState } from './store';
import { connect } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute'


class App extends Component<UserStore.UserState> {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact><Redirect to="/home" /></Route>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} isLoggedIn={this.props.loggedIn} />
          <PrivateRoute path="/home" component={Home} isLoggedIn={this.props.loggedIn} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.user, // Selects which state properties are merged into the component's props
  UserStore.actionCreators // Selects which action creators are merged into the component's props
)(App as any);
