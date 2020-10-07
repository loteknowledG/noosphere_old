import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Card, CardHeader, CardMedia, CardContent, Chip, ClickAwayListener, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { red } from '@material-ui/core/colors'
import useGlobal from "../../../store"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,
    objectFit: 'cover'
    // paddingTop: '56.25%', // 16:9
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
  const [characters, setCharacters] = useState([])
  const [globalState, globalActions] = useGlobal()

  const handleCardHeaderEdit = () => {
    setEdit('header')    
  }

  return (
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
            title={globalState.level.title}
            subheader={characters.length === 0 ? '' : characters.length === 1 ? characters[0] : characters.map(character => character + ' ')}
          />
        }
        { edit === 'header' && 
          <ClickAwayListener onClickAway={() => {
            setEdit(false)
          }} >
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }            
              title={<TextField multiline fullWidth label="Title" onChange={
                (event) => {
                  globalActions.setTitle(event.target.value)
                }
              } value={globalState.level.title}></TextField>}
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
          image={globalState.level.pix[0].src}          
        >
        </CardMedia>
        <CardContent>
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