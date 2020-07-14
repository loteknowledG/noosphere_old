import React, { useState, useGlobal } from 'reactn'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Card, CardHeader, CardMedia, CardContent, Chip, ClickAwayListener, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export function Cover (props) {
  const classes = useStyles()
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState('')
  const [characters, setCharacters] = useState([])
  const [spreadsheetId, setSpreadsheetId] = useGlobal('spreadsheetId')
  const [tableRange, setTableRange] = useGlobal('tableRange')  
  const [gifs, setGifs] = useGlobal('gifs')
  const [LeveLUuid, setLeveLUuid] = useGlobal('LeveLUuid')

  const handleTitleSave = () => {
    console.log(title, tableRange)
    return window.gapi.client.sheets.spreadsheets.values.batchUpdate({
      "spreadsheetId": spreadsheetId,
      "resource": {
        "valueInputOption": "RAW",
        "data": [{
          "range": "LeveLs!B" + tableRange,
          "values": [[title]]
        }]
      }
    }).then(function(response) { // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
    function(err) { console.error("Execute error", err); })
  }

  const handleMomentsSave = () => {
    console.log(' moments save : ' + [JSON.stringify(gifs)] )
    return window.gapi.client.sheets.spreadsheets.values.append({
      "spreadsheetId": "1jIQl3dnSPNPT6gWalvhdzNMP2qEQ_pIHWuwggc64fKc",
      "range": LeveLUuid + "!A1",
      "insertDataOption": "OVERWRITE",
      "valueInputOption": "RAW",
      "resource": {
        "values": [[JSON.stringify(gifs)]]
      }
    }).then(function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
    function(err) { console.error("Execute error", err); });    
  }

  const handleCardHeaderEdit = () => {
    setEdit('header')    
  }/*
 _     _  _    _|_ _ 
(/_>< (/_(_ |_| |_(/_
*/return (
    <>
      <Card className={classes.root}>
        { edit !== 'header' && 
          <CardHeader 
            onClick={() => { handleCardHeaderEdit() }}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }            
            title={title !== '' ? title : 'Add a title'}
            subheader={characters.length === 0 ? '' : characters.length === 1 ? characters[0] : characters.map(character => character + ' ')}
          />
        }
        { edit === 'header' && 
          <ClickAwayListener onClickAway={() => {
            handleTitleSave()
            handleMomentsSave()
            setEdit(false)

          }} >
            <CardHeader 
              // onClick={() => { handleCardHeaderEdit() }}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }            
            title={<TextField label="Title" onChange={(event) => setTitle(event.target.value)} value={title}></TextField>}
              subheader={
                <Autocomplete
                  multiple
                  id="tags-filled"
                  options={starlets.map((option) => option.title)}
                  freeSolo
                  filterSelectedOptions
                  value={characters}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField {...params} variant="filled" label="characters" />
                  )}
                  onChange={(event, newValue) => {
                    console.log(newValue)
                    setCharacters(newValue)
                  }}                  
                />
              }
            />
          </ClickAwayListener>
        }
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography> */}
        </CardContent>        
      </Card>      
    </>
  )
}
const starlets = [
  { title: 'Ashlee Coxxx', age: 16 },
  { title: 'Holy Kiss', age: 18 },
  { title: 'Linda Lush', age: 20 },
  { title: 'Sabrina Deep', year: 37 },
]
export default Cover