import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Button, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import { ContentSaveCog, DataMatrixPlus } from 'mdi-material-ui'
import { Dropzone } from './Dropzone'
import { useHistory } from "react-router-dom"
import useGlobal from "../../../store"

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
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
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

export function AddTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [textareaValue, setTextareaValue] = useState('')
  const [fileValue, setFileValue] = useState('')
  const [globalState, globalActions] = useGlobal()
  let history = useHistory()
  
  useEffect(() => {
    if (fileValue === '') {}
    else {
      globalActions.setLevel(fileValue)
      globalActions.addLevel(fileValue)
      history.push("/level")
    }
  }, [fileValue, globalActions, history])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const change = (event) => {
    setTextareaValue(event.target.value)
  }

  const handleExecute = () => {
    if (textareaValue) { 
      const gifs = textareaValue.split(',')
                      .filter(gif => gif.includes('https://lh3'))
                      .map(gif => '"' + gif.replace(/(\["|")/g, '').replace(/(\r\n\t|\n|\r\t)/gm, "") + '"')
      const level = JSON.parse('{ "pix": [' + gifs  + ']}')
      globalActions.setLevel(level)
      globalActions.addLevel(level)
      history.push("/level")
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange}
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example">
          <Tab label="Collate &amp; Save" {...a11yProps(0)} icon={<ContentSaveCog />} />
          <Tab label="Create Matrix" {...a11yProps(1)} icon={<DataMatrixPlus /> }/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
          label='copy paste fractal matrix'
          multiline
          rows={7}
          value={textareaValue}
          onChange={change}
          margin='normal'
          variant='outlined'
          spellCheck='false'
          className={classes.textareaAutosize} />
        <Button onClick={() => { handleExecute()} } color="primary">
          Execute
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Dropzone handleFileRead={(level) => setFileValue(level)} />    
      </TabPanel>    
    </div>
  )
}