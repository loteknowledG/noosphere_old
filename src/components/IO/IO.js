import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Backdrop, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@material-ui/core';
import { SpeedDial, SpeedDialIcon, SpeedDialAction} from '@material-ui/lab';
import { CloudUploadOutline, Download, ImageMultipleOutline, SafeSquareOutline, SafeSquare  } from 'mdi-material-ui'
import { useTheme } from '@material-ui/core/styles';
import { InloadTabs } from './InloadTabs'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
}));

const actions = [
  { icon: <ImageMultipleOutline />, name: 'Inload' },
  { icon: <CloudUploadOutline />, name: 'Outload' },
  { icon: <Download />, name: 'Download' },
];

export function IO () {
  const theme = useTheme();
  const classes = useStyles()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [speedDialOpen, setSpeedDialOpen] = useState(false)
  const [tabNotHidden, setTabNotHidden] = useState('')
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSpeedDialClick = () => {
    setSpeedDialOpen(!speedDialOpen);
  };

  const handleSpeedDialAction = (actionName) => {
    if (actionName === 'Inload') {
      setTabNotHidden('Inload')
      setDialogOpen(true)
    } 
  }

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className={classes.root}>
      <Backdrop open={speedDialOpen} />
      <SpeedDial
        ariaLabel="Safe"
        className={classes.speedDial}
        icon={<SpeedDialIcon icon={<SafeSquareOutline />} openIcon={<SafeSquare />} />}
        onClick={handleSpeedDialClick}
        open={speedDialOpen} >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(e) => {
              e.stopPropagation();
              handleSpeedDialAction(action.name)
            }}
          />
        ))}
      </SpeedDial>      
      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">
          { tabNotHidden === "Inload" && "Choose inload protocol" }      
        </DialogTitle>
        <DialogContent>
          { tabNotHidden === "Inload" && <InloadTabs handleDialogClose={() => {handleDialogClose()}} handleSpeedDialClick={() => handleSpeedDialClick()} /> }            
        </DialogContent>
        <DialogActions>          
          {/* <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>

    </div>
  );
}
export default IO
