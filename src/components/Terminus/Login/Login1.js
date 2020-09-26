import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import { Avatar, IconButton, Popover } from '@material-ui/core'
import { LoginVariant } from 'mdi-material-ui'

export function Login1() {  

  const { signIn, loaded } = useGoogleLogin({
    // onSuccess,
    // onAutoLoadFinished,
    // clientId,
    // cookiePolicy,
    // loginHint,
    // hostedDomain,
    // autoLoad,
    // isSignedIn,
    // fetchBasicProfile,
    // redirectUri,
    // discoveryDocs,
    // onFailure,
    // uxMode,
    // scope,
    // accessType,
    // responseType,
    // jsSrc,
    // onRequest,
    // prompt
  })
  return (   
    <IconButton onClick={() => { signIn() }}>
        <LoginVariant />
    </IconButton>  
  )
}
    
  
