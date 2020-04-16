import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoginStatus} from '../store/User'

export const PrivateRoute = (data: any) =>  data.loginStatus === LoginStatus.LoggedIn ? <Route { ...data } /> : <Redirect to="/login" />