import { Reducer } from 'redux';


export interface UserState {
  loggedIn: boolean
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

export const URL = `https://api.torn.com/user/`

export const actionCreators = {

  login: (key: string) => (dispatch: any) => {
    dispatch({ type: 'REQUEST_USER_LOGIN' });
    dispatch({ type: 'RESPONSE_USER_LOGIN', payload: {name: 'KARSH'} });

    // axios.get(`user/login`, {
    //   params: { key }
    // }).then((response: any) => {
    //   if (!response.error) dispatch({ type: 'RESPONSE_USER_LOGIN', response })
    // });
  }
}



export const reducer: Reducer<UserState> = (state: UserState | undefined, incomingAction: Action): UserState => {
  if (state === undefined) {
    return { loggedIn: false, name: 'NOT LOGGED IN!' }
  }
  console.log(incomingAction);
  switch (incomingAction.type) {
    case 'REQUEST_USER_LOGIN':
    case 'REQUEST_USER_LOGOUT':
      return state
    case 'RESPONSE_USER_LOGIN':
      return { loggedIn: true, ...incomingAction.payload }
    case 'RESPONSE_USER_LOGOUT':
      return { loggedIn: true }
  }
}