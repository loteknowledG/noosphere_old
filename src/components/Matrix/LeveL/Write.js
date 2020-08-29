import React, {useState, useGlobal } from 'reactn'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, Dialog, Fab, IconButton, Link, Typography } from '@material-ui/core'
import { FileDownloadOutline   } from 'mdi-material-ui'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
}))

export function Write (props) {
  
  const [level, setLevel] = useGlobal('level')
  const gifs = JSON.parse(level).pix

  function download () {
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


  

  
    var link = document.createElement('a');
    link.setAttribute('download', 'info.txt');
    link.href = makeTextFile(level);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
		});
    
  }

  const classes = useStyles();  
  return (
    <>
      <Fab className={classes.fab} color="primary" aria-label="add" onClick={() => download()}>
        <FileDownloadOutline />
      </Fab>         
    </>
  )
}
export default Write