import React, { useEffect, useState } from 'reactn'
import { makeStyles } from '@material-ui/core/styles';
import { Add } from './LeveL/Add'
import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid } from '@material-ui/core';
import { Terminus } from '../Terminus/Terminus'
import useGlobal from "../../store"
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
  paper: {
    height: 345,
    width: 345,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  

  function Levels() {
    if (globalState.matrix.length > 0) {
      return (<Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {globalState.matrix.map((card) => (
               
              <Grid key={card.id} item>
                <Card className={classes.paper} onClick={() => {}}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }                
                  title={card.title}
                  subheader={card.title}
                /> 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>)
    }
    return (null)
  }
  
  return (<><Terminus children={<><Levels/><Add/></>} /></>)
}

export default Matrix