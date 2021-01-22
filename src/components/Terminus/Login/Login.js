import React, { useState } from 'react'
import { LoginVariant } from 'mdi-material-ui'
import { makeStyles } from '@material-ui/core/styles'
import { Account } from './Account'
import { Avatar, IconButton, Popover } from '@material-ui/core'
import useGlobal from '../../../store'
import $ from 'jquery'
// import GoogleLogin from 'react-google-login';
// import { loadClient } from '../Cloud/Google/api'

const useStyles = makeStyles(theme => ({        
  fab: {
    margin: theme.spacing(1)
  },
  popover: {
    height: '33%'
  }
})) /*             _    
   / /  ___  ___ _(_)__ 
  / /__/ _ \/ _ `/ / _ \
 /____/\___/\_, /_/_//_/
           /__*/        
export function Login() {    
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
    // const [profileToken, setProfileToken] = useGlobal('profileToken')    
  const [globalState, globalActions] = useGlobal()
  const open = Boolean(anchorEl);

  function onClick (event) {
    console.log('clicked here')
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  function authenticate() {        
    return window.gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file "})
      .then(function(response) { globalActions.setProfileToken(response); console.log("Sign-in successful ", response); },
            function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    window.gapi.client.setApiKey("AIzaSyCEmxFXur3r9rQhcVDxeQ7mUI_UH1XLqpk");
    return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
      .then(function() { 
          console.log("GAPI client loaded for API"); 
          let auth2 = window.gapi.auth2.getAuthInstance();
          console.log("is signed in", auth2.isSignedIn.get())
          console.log(window.gapi.client)
    },
    function(err) { console.error("Error loading GAPI client for API", err); });
  }
  if (window.gapi) {
    window.gapi.load("client:auth2", function() {
      window.gapi.auth2.init({client_id: "951030999356-u51qqgcjepmp5d7vnc3ne0vkttnsqq60.apps.googleusercontent.com"});
    })
  }
  
  
  if (!$.isEmptyObject(globalState.profileToken)) {
    return (
      <>
        <Avatar src={(globalState.profileToken.Pt && globalState.profileToken.Pt.QK) || (globalState.profileToken.Tt && globalState.profileToken.Tt.SK) || (globalState.profileToken.Qt && globalState.profileToken.Qt.MK)} onClick={ onClick} /> 
        <Popover            
          open={open}
          anchorEl={anchorEl}
          className={classes.popup}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >                      
          <Account />
        </Popover>
      </>
    )
  } else {
    return (
      <IconButton onClick={() => { authenticate().then(loadClient) }}>
        <LoginVariant />
      </IconButton>
    )
  }
}
export default Login