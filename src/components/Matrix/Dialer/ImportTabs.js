import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Button, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import { CodeJson, ContentSaveCog, DataMatrixPlus } from 'mdi-material-ui'
import { Dropzone } from './Dropzone'
import { useHistory } from 'react-router-dom'
import useGlobal from '../../../store'
import { v4 as uuidv4 } from 'uuid'

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

export function ImportTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0)  
  const [globalState, globalActions] = useGlobal()
  const [showExecute, setShowExecute] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')
  const [fileValue, setFileValue] = useState('')
  const [jsonUrl, setJsonUrl] = useState('')
  let history = useHistory()
  
  useEffect(() => {
    if (fileValue === '' || fileValue === undefined) {}
    else if (fileValue.matrix) {
      globalActions.setMatrix(fileValue.matrix)
      props.onClose()      
    }
    else {      
      globalActions.addLevel(fileValue)
      history.push('/level')
    }
  }, [fileValue])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const change = (event) => {
    if (event.target.value.trim().length > 0) {
      setShowExecute(true)
    }    
    else {
      setShowExecute(false)
    }
    setTextareaValue(event.target.value.trim())
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
      history.push("/level")
    }
  }

  // const changeJsonUrl = (event) => {    
  //   let jsonUrl = event.target.value.trim()
  //   if (jsonUrl.length > 0) {
  //     setJsonUrl(jsonUrl)
  //   }
  // }

  const keyDownJsonUrl = (event) => {
    if (event.keyCode === 13) {
      let jsonUrl = event.target.value
      // https://drive.google.com/file/d/1GxJ0LNdINOC3UnE8N1RubXbUXVH3Y_bi/view?usp=sharing
      if (jsonUrl.includes('https://drive.google.com')) {
        fetch(jsonUrl, {
          headers: {
            'Content-Type': 'application/json',
            'secret-key': '$2b$10$2aQF212QWDkVna7roxDTGuzBmN1QbRl59wZR2yZP00MEbio968ySu'
          },
          mode: 'no-cors' // 'cors' by default
        }).then(function(response) {
          console.log(response)
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
          } // Examine the text in the response
          return response.json()
        }).then(function(data) {
          console.log(data)
          setFileValue(data)  
          props.onClose()           
        })  
      } else {
        fetch(jsonUrl, {
          headers: {
            'Content-Type': 'application/json',
            'secret-key': '$2b$10$2aQF212QWDkVna7roxDTGuzBmN1QbRl59wZR2yZP00MEbio968ySu'
          },
        }).then(function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
          } // Examine the text in the response
          return response.json()
        }).then(function(data) {
          console.log(data)
          setFileValue(data)  
          props.onClose()           
        })      
      } 
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
          <Tab label="Json cors" {...a11yProps(0)} icon={<CodeJson />} />
          <Tab label="Collate Html" {...a11yProps(1)} icon={<ContentSaveCog />} />
          <Tab label="Import Matrix" {...a11yProps(2)} icon={<DataMatrixPlus /> }/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField id="outlined-search" label="Json url" type="search" variant="outlined"  onKeyDown={keyDownJsonUrl }fullWidth/>
      </TabPanel>
      <TabPanel value={value} index={1}> {/* Collate Html */}
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
        { showExecute ? <Button onClick={() => { handleCollateHtml()} } color="primary">Execute</Button> : null }
      </TabPanel>
      <TabPanel value={value} index={2}> {/* Import Matrix */}
        <Dropzone handleFileRead={(level) => setFileValue(level)} />    
      </TabPanel>    
    </div>
  )
}
export default ImportTabs