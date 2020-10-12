import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab/'

import { CloudDownload, ContentSave, DeleteVariant } from 'mdi-material-ui'
import useGlobal from '../../../store'
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  speedDial: {
    position: 'fixed',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));


export function GridEdit(props) {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal()
  const [selected, setSelected] = useState([])  
  const [actions, setActions] = useState([{ icon: <CloudDownload />, name: 'Download'}, { icon: <ContentSave />, name: 'Save' }])
  const [direction, setDirection] = React.useState('up')
  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  

  function handleClose () {       
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClick(name) { 
    switch(name) {
      case 'Download':
        download()
        break;
      case 'Remove':
        let level = globalState.level
        level.pix = globalState.level.pix.filter(pic => !selected.includes(pic.key))        
        globalActions.setLevel(level)
        break;
      case 'Save':
        // code block
        break;
      default:
        // code block
    }
    setOpen(false);
  }

  function download() {
    var textFile = null,
    makeTextFile = function (text) {
      var data = new Blob([JSON.stringify(globalState.level)], {type: 'application/json'})
      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile)
      }
      textFile = window.URL.createObjectURL(data)
      return textFile
    }
    var link = document.createElement('a')
    link.setAttribute('download', globalState.level.title + '.json')
    link.href = makeTextFile(globalState.level)
    document.body.appendChild(link)

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click')
      link.dispatchEvent(event)
      document.body.removeChild(link)
		})
  }

  
  return (
    <div className={classes.root}>
       <Grid container>
        { globalState.level ? globalState.level.pix.map((pic) => {          
          return (
            <Grid item xs key={pic.key} >
              <Paper className={classes.paper} onClick={(picked) => {                
                if (picked.target.style.backgroundColor === '') {
                  picked.target.style.backgroundColor = 'violet'
                  if (actions.findIndex( x => x.name === 'Remove' ) < 0) {
                    actions.push({ icon: <DeleteVariant  />, name: 'Remove' })
                  }                  
                  if (selected.indexOf(pic.key) === -1) {
                     selected.push(pic.key)
                  }                  
                } else {
                  picked.target.style.backgroundColor = ''
                  if (selected.indexOf(pic.key) > -1) {
                    selected.splice(selected.indexOf(pic.key), 1)
                    if (selected.length === 0) {
                      actions.splice(actions.map(function(e) { return e.name; }).indexOf('Remove'), 1)
                    }                    
                  }                  
                }           
              }}> 
                <img src={pic.src} alt='' />          
              </Paper>
            </Grid>
          )          
        }) : <></> }
      </Grid>
      <SpeedDial
          ariaLabel="GridEdit SpeedDial"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleClick(action.name)}
              tooltipOpen
            />
          ))}
        </SpeedDial>      
    </div>
  )
}
export default GridEdit