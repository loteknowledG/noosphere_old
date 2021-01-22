import React, { useEffect } from 'react'
import { Avatar, Button, Grid, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
// import { Login1 } from './Login1'
import useGlobal from '../../../../store'
import { Login } from '../Login'

const useStyles = makeStyles(theme => ({        
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}))
 
export function Account(props) {
  const [globalState, globalActions] = useGlobal()
  // const [profileToken, setProfileToken] = useGlobal('profileToken')    
  const classes = useStyles()
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    if (globalState.profileToken) {
      
      fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${globalState.profileToken.tokenId}`, { signal: signal })
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        })
      return function cleanup() {
        abortController.abort();
      };    
    }        
    })
    function logout () {
      
      console.log(globalState.profileToken)
      window.gapi.auth2.getAuthInstance().signOut()
    }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}>     
            <Avatar alt="Remy Sharp" src={(globalState.profileToken.Pt && globalState.profileToken.Pt.QK) || (globalState.profileToken.Tt && globalState.profileToken.Tt.SK)} className={classes.large} />       
        </Grid>
        <Grid item xs={5}></Grid>
        <Button variant="contained" color="primary" onClick={() => { logout() }} >Logout</Button>
        {/* <Typography className={classes.typography}>The content of the Popover.</Typography> */}
      </Grid>        
    </>
  )
    // return (
    //     <Login/>
    // )
}
