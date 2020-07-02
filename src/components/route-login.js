import React, { useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import { IdentityModal } from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'
import { navigate } from 'gatsby'

export default () => {
  const identity = useIdentityContext()
  const [isVisible, setVisibility] = useState(false)

  if (identity && identity.isLoggedIn) {
    console.log(identity)
    return <p>Logged in</p>
  }

  return (
    <>
      <h1>Login or signup</h1>
      <button onClick={() => setVisibility(true)}>Login or signup</button>
      <IdentityModal showDialog={isVisible} onCloseDialog={() => setVisibility(false)} />
    </>
  )
}
