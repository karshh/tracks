import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = (data: any) =>  data.isLoggedIn ? <Route { ...data } /> : <Redirect to="/login" />