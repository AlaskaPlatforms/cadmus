import React from 'react'
import { Redirect, Route } from 'react-router'

export default function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route { ...rest } render={ props => authed
        ? <Component { ...props } />
        : <Redirect to={ { pathname: '/login', state: { from: props.location } } } />
      }
    />
  )
}
