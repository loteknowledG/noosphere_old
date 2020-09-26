import React from 'react';
import { AppBar, Button, Card, CardActions, CardContent, Container, InputBase, List, ListItem, TextField, Toolbar, Typography } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.common.white
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#000', 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(7),
      width: 'auto',
    },
  },
}))

export function Note (props) {
  const classes = useStyles()
  function takeNote() {}
  return (
    <>
      <Container maxWidth="lg">
        <Card className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <TextField id="standard-basic" placeholder="Title" InputProps={{ disableUnderline: true }} fullWidth />
          </Toolbar> 
          </AppBar>
          <CardContent>
            <List>            
              <ListItem>
                <TextField id="standard-basic" placeholder="Take a note" InputProps={{ disableUnderline: true }} fullWidth/>
              </ListItem>
            </List>
          </CardContent>
          <AppBar position="static" className={classes.appBarBottom}>
          <Toolbar>
          </Toolbar> 
          </AppBar>
        </Card>
      </Container>
    </>
  )
}

export default Note