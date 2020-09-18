import React, {useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, Dialog, Fab, IconButton, Link, Typography } from '@material-ui/core'
import { FileDownloadOutline   } from 'mdi-material-ui'
import useGlobal from "../../../store"

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
}))

export function Write (props) {
  const [globalState, globalActions] = useGlobal() 
  const classes = useStyles()
  function download () {
    var textFile = null,
    makeTextFile = function (text) {
      var data = new Blob([text], {type: 'application/json'});
      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }
      textFile = window.URL.createObjectURL(data);
      return textFile;
    };
    var link = document.createElement('a');
    link.setAttribute('download', globalState.level.title + '.json');
    link.href = makeTextFile(globalState.level);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
		});
  }

  return (
    <>
      <Fab className={classes.fab} color="primary" aria-label="add" onClick={() => download()}>
        <FileDownloadOutline />
      </Fab>         
    </>
  )
}
export default Write