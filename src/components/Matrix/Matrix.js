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
  let history = useHistory()
  
  function Levels() {
    if (globalState.matrix.length > 0) {
      return (<Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {globalState.matrix.map((card) => (
              <Grid key={card.id} item>
                <Card className={classes.paper} onClick={() => {
                  globalActions.setLevel(card)
                  history.push("/level")
                }}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }          
                    title={card.title}
                    subheader={card.title}
                  />
                  <CardMedia
                    className={classes.media}
                    image="https://lh3.googleusercontent.com/nO7QVdqIvdaYETvWuI9xLXmyCgB-bvLhEdH7_7MhcTafOK7GaJbxkzW6JpDF5eudqcmMYc0SSNJUKmdk4CnUdlrGZEx_vcPkKLLSOmHtiy8vKGpHRb19b96s3HlJcrVpchnVvBiBHEkspCUbd-r4mYIIIhp1Bx_kPfRzO5Ra0KtQgwTOUuMXCCh8VhXl5FIL0bJGY8ResXdOFBSamH1AXcV3vPatinJUgpXrLpQ_iVvaAldu6F3SBD9rRyYroCtYm46b-1brfP1pL2UFUExfxZZD9jot0SmSAj4pOEXjCDdrxyXdMoC9TAlCqntlxEoxp461ZyrqHJgpsqdP04f85a74UEeNyug7Gqi3F_iILMC5WlOCJiBGoHHtzUwHCermbiiePPY1PAl8yH6nxeto2qI7G09patM47AbTLZwMxuqMvALYnUpTzImktZeMot3VhNEstwpU6OHntVv2n3AxBFPCsLc3T0SUCe2PSOAzqcORhoGUjazwZcn7XejSDCSCZPYWQ2NUUwzIzSYQDR6ySsKeDul9NQuLvlONsicvGkrEJUY78644Ir9Vfb1TDTTyQmArX36Ct0YN8tXl1Xa9vYduLDxqvI0r3NcrZA43X_xEHMX2O_kpWGPQZis_IWEtjy7OWVihvpIdXH5Nt6jFyZA8th6Bvm9N_rgXW7PM0bRQJH3gDQ-_iOAXgSlZYw"
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