import React from 'react'
import useGlobal from '../store'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button, Card, CardActions, CardActionArea, CardHeader, CardContent, CardMedia, Grid, IconButton, Typography } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build'
// import { Button, Card, CardContent, H6 } from 'ui-neumorphism'
// import { Box, Flex, Spacer } from "@chakra-ui/react"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '25px'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  paper: {
    height: 432,
    width: 432,
  }, 
  title: {
    flexGrow: 1,
  },
}))

export function NowPlaying() {
  const classes = useStyles()
  const [globalState, globalActions] = useGlobal()
  let history = useHistory()
  
  if (globalState.matrix.length > 0) {
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {globalState.matrix.map((play, idx) => (
              <Grid key={play.key} item>
                <Card className={classes.paper}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    action={
                        <IconButton aria-label="matrix" onClick={() => {
                          globalActions.setPlay(play)
                          history.push('/matrix')
                        }}>
                          <BuildIcon />
                        </IconButton>
                    }
                    title={play.title}                  
                  />
                  <CardActionArea onClick={() => {
                      globalActions.setPlay(play)
                      history.push('/play')
                  }}>
                    <CardMedia
                      component="img"
                      alt={play.title}
                      image={play.cover} 
                      title={play.title}
                      height={400}                      
                    />
                  </CardActionArea>                
                </Card>             
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
  return (null)
}
export default NowPlaying