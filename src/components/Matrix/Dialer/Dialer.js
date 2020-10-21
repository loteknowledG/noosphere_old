import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { Dialog, Fab, IconButton, Typography } from '@material-ui/core'
import { Close, CloudDownload, ContentSave, UploadMultiple } from 'mdi-material-ui'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import useGlobal from '../../../store'
import { AddTabs } from './AddTabs'

const useStyles = makeStyles((theme) => ({
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

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})
// const actions = [
//   { icon: <CloudDownload />, name: 'Download'}, 
//   { icon: <ContentSave />, name: 'Save' },
//   { icon: <UploadMultiple />, name: 'Upload'}
// ];



export function Dialer (props) { 
  const classes = useStyles();
  const [dialerOpen, setDialerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [actions, setActions] = useState([{ icon: <UploadMultiple />, name: 'Upload'} ])
  const [globalState, globalActions] = useGlobal()

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };
  const handleOpen = () => {
    setDialerOpen(true);
  };

  const handleClose = () => {
    setDialerOpen(false);
  };

  const handleClick = (name) => {
    switch(name) {
      case 'Download':
        download()
        setDialogOpen(false);        
        break;      
      case 'Save':
        // code block
        break;
      case 'Upload':
        setDialerOpen(false)
        setDialogOpen(true)        
      default:
        // code block
    }
    
  }

  function download() {
    var textFile = null,
    makeTextFile = function (text) {
      var data = new Blob([JSON.stringify(globalState.matrix)], {type: 'application/json'})
      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile)
      }
      textFile = window.URL.createObjectURL(data)
      return textFile
    }
    var link = document.createElement('a')
    link.setAttribute('download', 'matrix.json')
    link.href = makeTextFile(globalState.level)
    document.body.appendChild(link)

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click')
      link.dispatchEvent(event)
      document.body.removeChild(link)
		})
  }

  return (<>
  <SpeedDial
      ariaLabel="GridEdit SpeedDial"
      className={classes.speedDial}
      hidden={hidden}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={dialerOpen}
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
    <AddDialog 
      keepMounted
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
    />  
  </>)
}
function AddDialog (props) {
  const { onClose, value: valueProp, open, ...other } = props
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <Close />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    )
  })
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent)
  
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="md"
      fullWidth
      onEntering={() => {}}
      aria-labelledby="confirmation-dialog-title"
      open={props.open}
      onClose={() => props.onClose()}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title" onClose={() => props.onClose()}>Matter Realize</DialogTitle>
      <DialogContent dividers>
        <AddTabs onClose={() => props.onClose()} />    
      </DialogContent>
    </Dialog>
  )
}
export default Dialer