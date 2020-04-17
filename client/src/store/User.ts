import { Reducer } from 'redux';
import axios from 'axios';


export enum LoginStatus {
  LoggedIn,
  LoggingIn,
  LoggingOut,
  LoggedOut
}

export interface UserState {
  loginStatus: LoginStatus
  name?: string
  karma?: string
  last_action?: { status: string, relative: string }
}

export interface RequestUserLogin { 
  type:  'REQUEST_USER_LOGIN'
}

export interface ResponseUserLogin {
  type: 'RESPONSE_USER_LOGIN'
  payload: any
}


export interface RequestUserLogout { 
  type: 'REQUEST_USER_LOGOUT'
}

export interface ResponseUserLogout {
  type: 'RESPONSE_USER_LOGOUT'
}

type Action = RequestUserLogin | RequestUserLogout | ResponseUserLogin | ResponseUserLogout

const URL = process.env.REACT_APP_SERVER_URL;
export const actionCreators = {

  login: (key: string) => (dispatch: any, getState: any) => {
    dispatch({ type: 'REQUEST_USER_LOGIN' });
    
    axios.post(URL + `auth/`, { key }).then((response: any) => {
      if (!response.data.error) dispatch({ type: 'RESPONSE_USER_LOGIN', payload: response.data })
    });
  },

  logout: () => (dispatch: any, getState: any) => {
    dispatch({ type: 'REQUEST_USER_LOGOUT' });
    return setTimeout(() => dispatch({ type: 'RESPONSE_USER_LOGOUT' }), 1000);
  }
}



export const reducer: Reducer<UserState> = (state: UserState | undefined, incomingAction: Action): UserState => {
  if (state === undefined) {
    return { loginStatus: LoginStatus.LoggedOut, name: 'NOT LOGGED IN!' }
  }
  console.log(incomingAction);
  switch (incomingAction.type) {
    case 'REQUEST_USER_LOGIN':
      return { loginStatus: LoginStatus.LoggingIn }
    case 'REQUEST_USER_LOGOUT':
      return { loginStatus: LoginStatus.LoggingOut }
    case 'RESPONSE_USER_LOGIN':
      return { loginStatus: LoginStatus.LoggedIn, ...incomingAction.payload }
    case 'RESPONSE_USER_LOGOUT':
      return { loginStatus: LoginStatus.LoggedOut }
  }
}