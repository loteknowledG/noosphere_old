import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button, Popover } from '@material-ui/core'
import useGlobal from '../../store'
import $ from 'jquery'

const useStyles = makeStyles((theme) => ({
  signIn: {
    position: 'fixed',
    top: theme.spacing(3),
    right: theme.spacing(3),
  }
}))

export function SignIn () {    
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [globalState, globalActions] = useGlobal()
  const open = Boolean(anchorEl)

  // function authenticate() {        
  //   return window.gapi.auth2.getAuthInstance()
  //     .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly"})
  //     .then(function(response) { globalActions.setProfileToken(response); console.log("Sign-in successful ", response); },
  //           function(err) { console.error("Error signing in", err); });
  // }
  // function loadClient() {
  //   window.gapi.client.setApiKey("AIzaSyCEmxFXur3r9rQhcVDxeQ7mUI_UH1XLqpk");
  //   return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
  //     .then(function() { 
  //         console.log("GAPI client loaded for API"); 
  //         let auth2 = window.gapi.auth2.getAuthInstance();
  //         console.log("is signed in", auth2.isSignedIn.get())
  //         console.log(window.gapi.client)
  //         console.log(readFile('matrix.json'))
  //   },
  //   function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  // if (window.gapi) {
  //   window.gapi.load("client:auth2", function() {
  //     window.gapi.auth2.init({client_id: "951030999356-u51qqgcjepmp5d7vnc3ne0vkttnsqq60.apps.googleusercontent.com"});
  //   })
  // }

  function authenticate() {
    return window.gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/spreadsheets"})
      .then(function(response) { 
        console.log(response)
        sessionStorage.setItem("WE", response)
        console.log("Sign-in successful"); 
      }, function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest").then(function() { 
      console.log("GAPI client loaded for API"); 
      execute() 
    }, function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return window.gapi.client.sheets.spreadsheets.create({
      "resource": {                
        "properties": {
            "title": ''
        },                
      }
    })
    .then(function(response) {
          // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
    function(err) { console.error("Execute error", err); });
  }
  window.gapi.load("client:auth2", function() {
      window.gapi.auth2.init({client_id: "346253512556-9cll30jrl8c77o4d4vk9md0mk94g8sge.apps.googleusercontent.com"});
  });

  function onClick (event) {
    console.log('clicked here')
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  const readFile = (fileId,callback) => {
    var request = window.gapi.client.drive.files.get({
      fileId: fileId,
      alt: 'media'
    })
    request.then(function(response){
        console.log(response); //response.body has the text content of the file
        if (typeof callback === "function") callback(response.body); 
    },function(error){
        console.error(error)
    })
    return request; //for batch request
  }

  if (!$.isEmptyObject(globalState.profileToken)) {

    // console.log(readFile('matrix.json'))


    return (
      <>
        <Avatar className={classes.signIn} src={(globalState.profileToken.Pt && globalState.profileToken.Pt.QK) || (globalState.profileToken.Tt && globalState.profileToken.Tt.SK) || (globalState.profileToken.Qt && globalState.profileToken.Qt.MK)} onClick={ onClick} /> 
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
          {/* <Account /> */}
        </Popover>
      </>
    )
  } else {

    return (      
      <Button className={classes.signIn} onClick={()=>{ authenticate().then(loadClient) }}>Sign In</Button>
    )
  }
}
export default SignIn


// this.readFile = function(fileId,callback){
//   var request = gapi.client.drive.files.get({
//     fileId: fileId,
//     alt: 'media'
//   })
//   request.then(function(response){
//       console.log(response); //response.body has the text content of the file
//       if (typeof callback === "function") callback(response.body); 
//   },function(error){
//       console.error(error)
//   })
//   return request; //for batch request
// }