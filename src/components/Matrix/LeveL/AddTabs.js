import React, {useGlobal, useState} from 'reactn';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Button, Link, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import { DataMatrixPlus, ContentSaveCog } from 'mdi-material-ui'
import { Dropzone } from './Dropzone'
import { useHistory } from "react-router-dom";

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
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  textareaAutosize: {
    width: '100%'
  }
}));

export function AddTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [textareaValue, setTextareaValue] = useState('')
  const [level, setLevel] = useGlobal('level')
  const [matrix, setMatrix] = useGlobal('matrix')
  let history = useHistory();

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const change = (event) => {
    setTextareaValue(event.target.value)    
  };

  const handleExecute = () => {
    if (textareaValue) { 
      let gifs = textareaValue.split(',')
                      .filter(gif => gif.startsWith('["https://lh3'))
                      .map(gif => '"' + gif.replace(/(\["|")/g, '').replace(/(\r\n\t|\n|\r\t)/gm, "") + '"')    
      setLevel(JSON.parse('{ "pix": [' + gifs  + ']}')) 
      console.log(matrix)
      matrix.push(JSON.parse('{ "pix": [' + gifs  + ']}'))
      setMatrix(matrix)
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
        <Link download="info.txt" id="downloadlink" style={{display: "none"}}>download</Link> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Dropzone onClose={() => props.onClose()} /> 
      </TabPanel>      
    </div>
  );
}