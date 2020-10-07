
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, IconButton , Toolbar } from '@material-ui/core'
import { ArrowLeft } from 'mdi-material-ui'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
    color: '#000' 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function TopBar(props) {
  const classes = useStyles();
  const history = useHistory()
  return (<>
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="previous" onClick={() => history.push("/matrix")}>
            <ArrowLeft />
        </IconButton>
      </Toolbar>
    </AppBar>
  </>)
}
export default TopBar