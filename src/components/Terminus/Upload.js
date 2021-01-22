import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import { AppBar, Box, Button, Fab, Container, Dialog, DialogContent, Divider, Paper, Tabs, Tab, TextField } from '@material-ui/core';

import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CodeJson, ContentSaveCog, DataMatrixPlus, Upload as UploadIcon } from 'mdi-material-ui'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useGlobal from '../../store'
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  drop: {
    height: 456
  },
  
  textareaAutosize: {
    width: '100%'
  }
}))



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
        <Box>
            {children}
        </Box>
    </Container>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}


export function Upload() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fileValue, setFileValue] = useState('')
  const [globalState, globalActions] = useGlobal()
  const [showExecute, setShowExecute] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')
  const [tabValue, setTabValue] = useState(0) 
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  let history = useHistory()

  useEffect(() => {
    if (fileValue === '' || fileValue === undefined) {}
    else if (fileValue.matrix) {
      globalActions.setMatrix(fileValue.matrix)
      setDialogOpen(false)     
    }
    else {      
      globalActions.addLevel(fileValue)
      history.push('/level')
    }
  }, [fileValue])


  const collateHtmlChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setShowExecute(true)
    }    
    else {
      setShowExecute(false)
    }
    setTextareaValue(event.target.value.trim())
  }

  function Dropzone(props) {  
    const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          // Do whatever you want with the file contents
          setFileValue(JSON.parse(reader.result ))
          console.log(reader.result)
        }
        reader.readAsText(file)
      })
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        Drag 'n' drop some Matrix files here, or click to select files      
      </div>
    )
  }

  const handleCollateHtml = () => {
    if (textareaValue) {       
      const gifs = textareaValue.split(',')
                      .filter(gif => gif.includes('https://lh3'))
                      .map(gif => '"' + gif.replace(/(\["|")/g, '').replace(/(\r\n\t|\n|\r\t)/gm, "") + '"')      
      const level = {}
      level.key = uuidv4()
      level.pix = JSON.parse('{ "pix": [' + gifs  + ']}').pix.map((moment) => {
        let pix = {}
        pix.key = uuidv4()
        pix.src = moment
        return pix
      })
      level.cover = level.pix[0].src
      globalActions.addLevel(level)
      handleDialogClose()
    }
  }
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }
  const keyDownJsonUrl = (event) => {
    if (event.keyCode === 13) {
      let jsonUrl = event.target.value
      fetch(jsonUrl).then(function(response) {
        return response.json()
      }).then(function(data) {
        console.log(data)
        setFileValue(data)
        handleDialogClose()  
      })
    }
  }
  return (
    <div>
      <Fab color="secondary" aria-label="upload" className={classes.fab} onClick={handleDialogOpen}>
        <UploadIcon />
      </Fab>
      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Pick Inload Uplink"}</DialogTitle>
        <DialogContent>
          <AppBar position="static" color="default">
            <Tabs value={tabValue} onChange={handleTabChange}
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example">
              <Tab label="Json cors" {...a11yProps(0)} icon={<CodeJson />} />
              <Tab label="Collate Html" {...a11yProps(1)} icon={<ContentSaveCog />} />
              <Tab label="Import Matrix" {...a11yProps(2)} icon={<DataMatrixPlus /> }/>
            </Tabs>
          </AppBar>
          <TabPanel value={tabValue} index={0}> 
            <TextField 
              id="outlined-search"               
              margin='normal'
              label="Json url" 
              type="search" 
              variant="outlined"  
              onKeyDown={keyDownJsonUrl} 
              className={classes.textfield} 
              fullWidth
            />
          </TabPanel>
          <TabPanel value={tabValue} index={1}> 
            <TextField
              label='copy paste fractal matrix'
              multiline
              rows={7}
              value={textareaValue}
              onChange={collateHtmlChange}
              margin='normal'
              variant='outlined'
              spellCheck='false'              
              fullWidth/>
            { showExecute ? <Button onClick={() => { handleCollateHtml()} } color="primary">Execute</Button> : null }
          </TabPanel>
          <TabPanel value={tabValue} index={2}> {/* Import Matrix */}
            <Dropzone margin="normal" />    
          </TabPanel>  
        </DialogContent>        
      </Dialog>
    </div>
  );
}
export default Upload