import React, { useEffect, useState, useGlobal } from 'reactn'
import { makeStyles } from '@material-ui/core/styles';
import { Add } from './LeveL/Add'
import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid } from '@material-ui/core';
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
  

  function createMatrix () {
    return window.gapi.client.sheets.spreadsheets.create({
      "resource": {
        "sheets": [
          {
            "properties": {
              "title": "LeveLs"
            }
          }
        ],
        "properties": {
          "title": "23407 matrix"
        }
      }
    }).then(function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
    function(err) { console.error("Execute error", err); });
  }

  function loadClient() {
    return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  
  function findMatrix() {
    if (window.gapi.client.drive) {
      return window.gapi.client.drive.files.list({})
        .then(function(response) {
          // Handle the results here (response.result has the parsed body).
          let matrix = response.result.files.find(file => {
            return file.name === '23407 matrix'                      
          })
          // 23407 matrix found
          if (matrix) {
            return matrix
          } else { // create 23407
            console.log('need to create matrix')
            throw new Error('Something failed');
          }
        },
        function(err) { console.error("Execute error", err) })
    } else {
      console.log('error')
      throw new Error('Something failed');
    }
  }/*
   _     _  _    _|_ _ 
  (/_>< (/_(_ |_| |_(/_
*/
  useEffect(() => {
    findMatrix().then((matrix) => {
      setSpreadsheetId(matrix.id)
      loadClient().then(() => {
        window.gapi.client.sheets.spreadsheets.get({
          "spreadsheetId": matrix.id,
          "includeGridData": true,
        }).then(function(response) {
                    // Handle the results here (response.result has the parsed body).
          if (response.result.sheets[0].data[0].rowData) {
            let cards = response.result.sheets[0].data[0].rowData.reduce((accumulator, currentValue) => {
              if (currentValue.values[0] && currentValue.values[0].formattedValue &&
                  currentValue.values[1] && currentValue.values[1].formattedValue) {
                accumulator.push({id: currentValue.values[0].formattedValue, name: currentValue.values[1].formattedValue})              
              }
              return accumulator
            }, []);
            setLevels(cards)
          }
        },
        function(err) { console.error("Execute error", err); });
      })
      
    }).catch(error => alert(error.message));
    
  }, []); // Only re-run the effect if count changes

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