import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Popover, TextField } from '@material-ui/core'
import useGlobal from '../../store'
import $ from 'jquery'

export function SignIn () {    
  const [anchorEl, setAnchorEl] = useState(null)
  const [globalState, globalActions] = useGlobal()
  const open = Boolean(anchorEl)
  const [sheetIdDialogOpen, setSheetIdDialogOpen] = React.useState(false);

  // function authenticate() {
  //   return window.gapi.auth2.getAuthInstance()
  //       .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"})
  //       .then(function() { console.log("Sign-in successful"); },
  //             function(err) { console.error("Error signing in", err); });
  // }
  // function loadClient() {
  //   window.gapi.client.setApiKey("YOUR_API_KEY");
  //   return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //             function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  // // Make sure the client is loaded and sign-in is complete before calling this method.
  // function execute() {
  //   return window.gapi.client.drive.files.list({
  //     "q": "name = '23407 matrix'"
  //   })
  //     .then(function(response) {
  //       // Handle the results here (response.result has the parsed body).
  //       console.log("Response", response);
  //     },
  //     function(err) { console.error("Execute error", err); });
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
    return setSheetIdDialogOpen(true)

    // return window.gapi.client.sheets.spreadsheets.create({
    //   "resource": {                
    //     "properties": {
    //         "title": ''
    //     },                
    //   }
    // })
    
    
    
    // return window.gapi.client.sheets.spreadsheets.get({
    //   "spreadsheetId": "1pwiwedNdpQ6Eikg8hEEOy80T00-OsRN7-DgrV9zUiDA",
    //   "includeGridData": true
    // })
    // .then(function(response) {
    //       // Handle the results here (response.result has the parsed body).
    //   console.log("Response", response);
    // },
    // function(err) { console.error("Execute error", err); });
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
        <Avatar src={(globalState.profileToken.Pt && globalState.profileToken.Pt.QK) || (globalState.profileToken.Tt && globalState.profileToken.Tt.SK) || (globalState.profileToken.Qt && globalState.profileToken.Qt.MK)} onClick={ onClick} /> 
        <Popover            
          open={open}
          anchorEl={anchorEl}
          // className={classes.popup}
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
      <>
        <Button onClick={()=>{ authenticate().then(loadClient) }}>Sign In</Button>
        <Dialog open={sheetIdDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Google Spreadsheet Id</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to the google spreadsheet, please enter sheet Id here. 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="sheetId"
              label="Google Sheet Id"              
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </>
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