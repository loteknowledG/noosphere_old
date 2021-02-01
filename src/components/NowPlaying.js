import React from 'react'
import useGlobal from '../store'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { Button, Card, CardContent, H6 } from 'ui-neumorphism'
import { Box, Flex, Spacer } from "@chakra-ui/react"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  paper: {
    height: 345,
    width: 345,
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
    return (<Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {globalState.matrix.map((level, idx) => (
            <Grid key={level.key} item>
              <Card rounded onClick={() => {
                globalActions.setLevel(level)
              }}>
                <CardContent>
                  <H6>{level.title}</H6>                
                </CardContent>          
                <Card inset>
                  <img alt="" src={level.cover} />
                </Card>     
                <Flex>
                  <Box p="4">
                    <Button rounded text color='var(--primary)' onClick={() => { 
                      globalActions.setLevel(level)
                      globalActions.setLevelIdx(idx)
                      history.push("/play")
                    }}>
                      Play
                    </Button>
                  </Box>
                  <Spacer />
                  <Box p="4">
                    <Button rounded text>
                      Cogitate                    
                    </Button>
                  </Box>
                </Flex>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>)
  }
  return (null)
}
export default NowPlaying