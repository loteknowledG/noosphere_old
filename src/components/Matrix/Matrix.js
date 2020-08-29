import React, { useEffect, useState, useGlobal } from 'reactn'
import { makeStyles } from '@material-ui/core/styles';
import { Add } from './LeveL/Add'
import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid } from '@material-ui/core';
import { MiniDrawer } from '../MiniDrawer/MiniDrawer'
// import { loadClient } from '../Cloud/Google/api'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  paper: {
    height: 345,
    width: 345,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
     /*   e                  d8          ,e,          
    d8b  d8b       /~~~8e  _d88__ 888-~\  "  Y88b  /  
   d888bdY88b          88b  888   888    888  Y88b/   
  / Y88Y Y888b    e88~-888  888   888    888   Y88b   
 /   YY   Y888b  C888  888  888   888    888   /Y88b  
/          Y888b  "88_-888  "88_/ 888    888  /  Y8*/ 
export function Matrix(props) {
  const classes = useStyles();
  const [profileToken, setProfileToken] = useGlobal('profileToken')
  const [spreadsheetId, setSpreadsheetId] = useGlobal('spreadsheetId')  
  const [sector, setSector] = useGlobal('sector')
  const [levels, setLevels] = useState([])
  const [gifs, setGifs] = useGlobal('gifs')
  
  

  // function createMatrix () {
  //   console.log('create matrix')
  //   return window.gapi.client.sheets.spreadsheets.create({
  //     "resource": {
  //       "sheets": [
  //         {
  //           "properties": {
  //             "title": "LeveLs"
  //           }
  //         }
  //       ],
  //       "properties": {
  //         "title": "23407 matrix"
  //       }
  //     }
  //   }).then(function(response) {
  //     // Handle the results here (response.result has the parsed body).
  //     console.log("Response", response);
  //   },
  //   function(err) { console.error("Execute error", err); });
  // }

  // function loadClient() {
  //   return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //             function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  
  // function findMatrix() {
  //   console.log('find matrix')
  //   if (window.gapi.client.drive) {
  //     return window.gapi.client.drive.files.list({})
  //       .then(function(response) {
  //         // Handle the results here (response.result has the parsed body).
  //         let matrix = response.result.files.find(file => {
  //           return file.name === '23407 matrix'                      
  //         })
  //         // 23407 matrix found
  //         console.log('find matrix: ', matrix)
  //         if (matrix) {
  //           return matrix
  //         } else { // create 23407
  //           console.log('need to create matrix')
  //           createMatrix()
  //           throw new Error('Something failed');
  //         }
  //       },
  //       function(err) { console.error("Execute error", err) })
  //   } else {
  //     console.log('error')
  //     throw new Error('Something failed');
  //   }
  // }
  
  
  // useEffect(() => {
  //   findMatrix().then((matrix) => {
  //     console.log(matrix)
  //     setSpreadsheetId(matrix.id)
  //     loadClient().then(() => {
  //       window.gapi.client.sheets.spreadsheets.get({
  //         "spreadsheetId": matrix.id,
  //         "includeGridData": true,
  //       }).then(function(response) {
  //                   // Handle the results here (response.result has the parsed body).
  //         if (response.result.sheets[0].data[0].rowData) {
  //           let cards = response.result.sheets[0].data[0].rowData.reduce((accumulator, currentValue) => {
  //             if (currentValue.values[0] && currentValue.values[0].formattedValue &&
  //                 currentValue.values[1] && currentValue.values[1].formattedValue) {
  //               accumulator.push({id: currentValue.values[0].formattedValue, name: currentValue.values[1].formattedValue})              
  //             }
  //             return accumulator
  //           }, []);
  //           setLevels(cards)
  //         }
  //       },
  //       function(err) { console.error("Execute error", err); });
  //     })
      
  //   }).catch(error => alert(error.message));
    
  // }, []); // Only re-run the effect if count changes



/**
   * Sample JavaScript code for drive.files.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  // function authenticate() {
  //   return window.gapi.auth2.getAuthInstance()
  //       .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.apps.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"})
  //       .then(function() { console.log("Sign-in successful"); },
  //             function(err) { console.error("Error signing in", err); });
  // }
  // function loadClient() {
  //   window.gapi.client.setApiKey("AIzaSyCEmxFXur3r9rQhcVDxeQ7mUI_UH1XLqpk");
  //   return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //             function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  // // Make sure the client is loaded and sign-in is complete before calling this method.
  // function execute() {
  //   return window.gapi.client.drive.files.list({})
  //       .then(function(response) {
  //               // Handle the results here (response.result has the parsed body).
  //               console.log("Response", response);
  //             },
  //             function(err) { console.error("Execute error", err); });
  // }
  // window.gapi.load("client:auth2", function() {
  //   console.log('matrix')
  //   window.gapi.auth2.init({client_id: "951030999356-u51qqgcjepmp5d7vnc3ne0vkttnsqq60.apps.googleusercontent.com"});
  // });
  // execute()
  // authenticate().then(loadClient).then(execute())

  function LeveLs(props) {
    if (props.levels.length > 0) {
      return (<Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {levels.map((card) => (
              <Grid key={card.id} item>
                <Card className={classes.paper} onClick={() => { setGifs([]); setSector('level') }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }                
                  title={card.name}
                  subheader="September 14, 2016"
                /> 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>)
    }
    return (null)
  }
  
  return (<>
    <LeveLs levels={levels} />
    <Add/>
  </>)
}

export default Matrix