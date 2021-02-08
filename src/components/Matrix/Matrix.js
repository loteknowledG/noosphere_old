import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Card, CardMedia, Grid, IconButton, Toolbar } from '@material-ui/core'
import { ArrowLeft } from 'mdi-material-ui'
import useGlobal from '../../store'
import { useHistory } from 'react-router-dom'

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
  media: {
    height: 345,
    objectFit: 'cover'
    // paddingTop: '56.25%', // 16:9
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'grey'
  },
  paper: {
    height: 345,
    width: 345,
  }, 
  title: {
    flexGrow: 1,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  brandText: {
    flexGrow: 1,
    fontFamily: 'monospace',
    fontSize: 7,
    marginBotton: 7,
    position: 'relative',
    whiteSpace: 'pre'
  },
  neon: {
    color: 'whitesmoke',
    textShadow:
      '0 0 3px #9D33FF,' +
      '0 0 5px #9D33FF,' +
      '0 0 10px #9D33FF,' +
      '0 0 20px #9D33FF,' +
      '0 0 40px #9D33FF,' +
      '0 0 50px #9D33FF'   
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

  if (globalState.now.play) {
    return (
      <div>
      <AppBar color="transparent" elevation={0} position="fixed" className={classes.appBar}>
      <Toolbar>
          <IconButton
            color="inherit"
            aria-label="back"
            edge="start"
            onClick={() => {
              history.push('/')
            }}
            className={classes.menuButton}
          >
            <ArrowLeft />
          </IconButton>
<pre className={`${classes.brandText} ${classes.neon}`}> 
888b    |   ,88~~\     ,88~~\                    888                                <br/> 
|Y88b   |  d888   \   d888   \   d88~\ 888-~88e  888-~88e  e88~~8e  888-~\  e88~~8e <br/>
| Y88b  | 88888    | 88888    | C888   888  888b 888  888 d888  88b 888    d888  88b<br/>
|  Y88b | 88888    | 88888    |  Y88b  888  8888 888  888 8888__888 888    8888__888<br/>
|   Y88b|  Y888   /   Y888   /    888D 888  888P 888  888 Y888    , 888    Y888    ,<br/>
|    Y888   `88__/     `88__/   \_88P  888-_88"  888  888  "88___/  888     "88___/ <br/>
|                                      888                                          <br/>                      
</pre>     
        </Toolbar>
      </AppBar>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {globalState.now.play.pix.map((pic) => (
              <Grid key={pic.key} item>
                <Card className={classes.paper} onClick={() => {
                  globalActions.setLevel(pic)
                  history.push("/tune")
                }}>
                  <CardMedia
                    className={classes.media}
                    image={pic.src}                  
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </div>)
  }
  return (null)
}

export default Matrix