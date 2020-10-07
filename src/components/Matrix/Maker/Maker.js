import React, {useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import { Dialog, Fab, IconButton, Typography } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import { Close, DataMatrixPlus } from 'mdi-material-ui'
import { AddTabs } from '../LeveL/AddTabs'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  flex: {
    flex: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  textareaAutosize: {
    width: '100%'
  }
}))

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

export function Maker () {
  const classes = useStyles();  
  const [open, setOpen] = useState(false)
   
  return (
    <>
      <Fab className={classes.fab} color="primary" aria-label="matrix creation" onClick={() => setOpen(true)}>
        <DataMatrixPlus />
      </Fab>
      <AddDialog 
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
      />      
    </>
  )
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
        <AddTabs onClose={() => onClose} />    
      </DialogContent>
    </Dialog>
  )
}

export default Maker