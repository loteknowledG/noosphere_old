import React, { useEffect, useGlobal } from 'reactn'
import { Avatar, Grid, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
// import { Login1 } from './Login1'
import { Login } from '../Login'

const useStyles = makeStyles(theme => ({        
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}))
 
export function Account(props) {
    // const [profileToken, setProfileToken] = useGlobal('profileToken')    
    // const classes = useStyles()
    // useEffect(() => {
    //     const abortController = new AbortController()
    //     const signal = abortController.signal
    //     if (profileToken) {
    //         fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${profileToken.tokenId}`, { signal: signal })
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .then((myJson) => {
    //                 console.log(myJson);
    //             })
    //         return function cleanup() {
    //             abortController.abort();
    //         };    
    //     }        
    // })
    // return (
    //     <>
    //         <Grid container spacing={3}>
    //             <Grid item xs={5}></Grid>
    //             <Grid item xs={2}>     
    //                 <Avatar alt="Remy Sharp" src={(profileToken.Pt && profileToken.Pt.QK) || (profileToken.Tt && profileToken.Tt.SK)} className={classes.large} />       
    //             </Grid>
    //             <Grid item xs={5}></Grid>
    //             <Typography className={classes.typography}>The content of the Popover.</Typography>
    //         </Grid>        
    //     </>
    // )
    return (
        <Login/>
    )
}
