import React from 'react'
import { IdentityContextProvider } from 'react-netlify-identity-widget'
import RouteLogin from '../components/route-login'

export default () => {
  return (
    <IdentityContextProvider url="https://gethyn1-netlify-identity.netlify.app">
      <p>The index</p>
      <RouteLogin />
    </IdentityContextProvider>
  )
}
