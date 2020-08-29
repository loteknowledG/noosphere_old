
import React, {useState, useGlobal } from 'reactn'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import { Button, Dialog, Fab, IconButton, Link, Typography } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import { Plus, Close } from 'mdi-material-ui'
import { uuid } from '../../Utility/uuid'
import { Dropzone } from './Dropzone'

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
});
   /*--,                              
  '  .' \            ,---,      ,---, 
 /  ;    '.        ,---.'|    ,---.'| 
:  :       \       |   | :    |   | : 
:  |   /\   \      |   | |    |   | | 
|  :  ' ;.   :   ,--.__| |  ,--.__| | 
|  |  ;/  \   \ /   ,'   | /   ,'   | 
'  :  | \  \ ,'.   '  /  |.   '  /  | 
|  |  '  '--'  '   ; |:  |'   ; |:  | 
|  :  :        |   | '/  '|   | '/  ' 
|  | ,'        |   :    :||   :    :| 
`--''           \   \  /   \   \  /   
                 `----'     `---*/          
export function Add (props) {
  const { spreadsheetId } = props
  const classes = useStyles();  
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  
  window.gapi.load("client:auth2", function() {
    window.gapi.auth2.init({client_id: "524121216771-vv0e5evrv7k59esgvp181p4tmqbvuvii.apps.googleusercontent.com"});
  });

  return (
    <>
      <Fab className={classes.fab} color="primary" aria-label="add" onClick={() => setOpen(true)}>
        <Plus />
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
  const [value, setValue] = useState(valueProp)
  const [gifs, setGifs] = useGlobal('gifs')
  const classes = useStyles()
  const [sector, setSector] = useGlobal('sector')
  const [LeveLUuid, setLeveLUuid] = useGlobal('LeveLUuid')
  const [spreadsheetId, setSpreadsheetId] = useGlobal('spreadsheetId')
  const [tableRange, setTableRange] = useGlobal('tableRange')
  

  const change = (event) => {
    setValue(event.target.value);
  };

  const handleClean = () => {
    var textFile = null,
    makeTextFile = function (text) {
      var data = new Blob([text], {type: 'text/plain'});
  
      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }
  
      textFile = window.URL.createObjectURL(data);
  
      return textFile;
    };

    if (value) { 
      let gifs = value.split(',')
                      .filter(gif => gif.startsWith('["https://lh3'))
                      .map(gif => gif.replace(/(\["|")/g, '').replace(/(\r\n\t|\n|\r\t)/gm,""))
      var link = document.getElementById('downloadlink');
      link.href = makeTextFile(gifs);
      link.style.display = 'block';
    }
  }

  const handleMaterialize = () => {   
    if (value) { 
      let gifs = []
      if (value.indexOf('[') !== -1) {
        gifs = value.split(',')
                    .filter(gif => gif.startsWith('["https://lh3'))
                    .map(gif => gif.replace(/(\["|")/g, '').replace(/(\r\n\t|\n|\r\t)/gm,""))
      } else {
        gifs = value.split(',')
      }            
      setGifs(gifs);          
      setSector('level')                
      let levelUuid = uuid()
      setLeveLUuid(levelUuid)
      handleUuidSheetAppend(levelUuid)
      handleLeveLSheetCreate(levelUuid)
      onClose()
    }
  };

  const handleUuidSheetAppend = (levelUuid) => {
    return window.gapi.client.sheets.spreadsheets.values.append({
      "spreadsheetId": spreadsheetId,
      "range": "LeveLs!A1",
      "insertDataOption": "INSERT_ROWS",
      "valueInputOption": "RAW",      
      "resource": {
        "values": [[levelUuid]],
        "majorDimension": "ROWS"
      }
    }).then((response) => { // Handle the results here (response.result has the parsed body).
      let tableRange = 0;
      if (response.result.tableRange) {
        console.log('tableRange: ', response.result.tableRange)
        tableRange = response.result.tableRange.split(':')[1]
        if (response.result.tableRange) {
          setTableRange((Number(tableRange.slice(1)) + 1))
        } else {
          setTableRange(1)
        }
      } else {
        setTableRange(1)
      }
    },
    function(err) { console.error("Execute error", err); }).then((response) => {
      createLeveL(levelUuid)
    })
  } 

  const handleLeveLSheetCreate = (levelUuid) => {
    return window.gapi.client.sheets.spreadsheets.batchUpdate({
      "spreadsheetId": "1jIQl3dnSPNPT6gWalvhdzNMP2qEQ_pIHWuwggc64fKc",
      "resource": {
        "requests": [
          {
            "addSheet": {
              "properties": {
                "title": levelUuid
              }
            }
          }
        ]
      }
    }).then(function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);

    },
    function(err) { console.error("Execute error", err); });
  }

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
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const createLeveL = (levelUuid) => {
    return window.gapi.client.sheets.spreadsheets.create({
      properties: {
        title: levelUuid
      }
    }).then((response) => {
    });
  }


  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="md"
      fullWidth
      onEntering={() => {}}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      onClose={() => onClose()}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title" onClose={() => onClose()}>Matter Realize</DialogTitle>
      <DialogContent dividers>
        <Dropzone />
        {/* <TextareaAutosize
          label='copy paste fractal matrix'
          rowsMin={17}          
          value={value}
          onChange={change}
          margin='normal'
          variant='outlined'        
          spellCheck='false'
          className={classes.textareaAutosize} /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { handleClean()} } color="primary">
          Clean
        </Button>
        <Button onClick={() => { handleMaterialize() }} color="primary">
          Materialize
        </Button>
        <Link download="info.txt" id="downloadlink" style={{display: "none"}}>download</Link>
        {/* <a download="info.txt" id="downloadlink" style="display: none">Download</a> */}
      </DialogActions>
    </Dialog>
  )
}