import React, { Component } from 'react'
import * as UserStore from '../store/User'
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Link } from 'react-router-dom';

type NavBarProps = UserStore.UserState & typeof UserStore.actionCreators & { linkStyle: {padding: string, display: string} }

class NavBarOptions extends Component<NavBarProps, {}> {
  
  
  buttonClicked = (event: any) => {
    console.log(event.target.id);

    if(event.target.id === 'Logout') this.props.logout();
    event.preventDefault();
  }

  getLinks = (links: Array<any>) => {
    return links.map((x) => <Link onClick={this.buttonClicked} key={x.to} id={x.name} style={this.props.linkStyle} to={x.to}>{x.name}</Link>)
  }

  render() {

    const links = []
    
    if (this.props.loginStatus === UserStore.LoginStatus.LoggedIn) {
      links.push({ to: '/home', name: 'Home'});
      links.push({ to: '/dashboard', name: 'Dashboard'});
      links.push({ to: '/logout', name: 'Logout' })
    }
    if ( this.props.loginStatus === UserStore.LoginStatus.LoggedOut) {
      links.push({ to: '/login', name: 'Login' })
    }
    return this.getLinks(links);
  }
}

export default connect(
  (state: ApplicationState) => state.user, // Selects which state properties are merged into the component's props
  UserStore.actionCreators // Selects which action creators are merged into the component's props
)(NavBarOptions as any);

