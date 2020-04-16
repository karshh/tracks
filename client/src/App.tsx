import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: any) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb: any) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const PrivateRoute = (data: any) => (
  <Route data render={(props: any) => 
    ( fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to='/login' /> )} />
)


function App() {
  const username = "nym";
  return (
    <div>
        <NavBar />
        <Switch>
          <Route path="/" exact><Redirect to="/home"/></Route>
          <Route path="/dashboard">
              <Dashboard username={username}></Dashboard>
          </Route>
          <Route path="/home" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
