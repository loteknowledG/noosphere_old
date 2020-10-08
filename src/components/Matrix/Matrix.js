import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Maker } from './Maker/Maker'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid } from '@material-ui/core'
import { Terminus } from '../Terminus/Terminus'
import useGlobal from '../../store'
import { useHistory } from 'react-router-dom'
// import { loadClient } from '../Cloud/Google/api'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  media: {
    height: 345,
    objectFit: 'cover'
    // paddingTop: '56.25%', // 16:9
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    height: 345,
    width: 345,
  }, 
  title: {
    flexGrow: 1,
  },
}))
     /*   e                  d8          ,e,          
    d8b  d8b       /~~~8e  _d88__ 888-~\  "  Y88b  /  
   d888bdY88b          88b  888   888    888  Y88b/   
  / Y88Y Y888b    e88~-888  888   888    888   Y88b   
 /   YY   Y888b  C888  888  888   888    888   /Y88b  
/          Y888b  "88_-888  "88_/ 888    888  /  Y8*/ 
export function Matrix() {
  const classes = useStyles()
  const [globalState, globalActions] = useGlobal()
  let history = useHistory()
  
  function Levels() {
    if (globalState.matrix.length > 0) {
      return (<Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {globalState.matrix.map((level) => (
              <Grid key={level.key} item>
                <Card className={classes.paper} onClick={() => {
                  globalActions.setLevel(level)
                  history.push("/level")
                }}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }          
                    title={level.title}
                    subheader={level.title}
                  />
                  <CardMedia
                    className={classes.media}
                    image={level.cover}
                    title="Paella dish"
                  />
                  <CardContent>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>)
    }
    return (null)
  }
  return (<><Terminus children={<><Levels/><Maker/></>} /></>)
}

export default Matrix