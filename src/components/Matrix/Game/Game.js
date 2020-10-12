import React, { useState } from 'react'
import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core'
import { Cookie } from '../Cookie/Cookie'
import { makeStyles } from '@material-ui/core/styles'
import useGlobal from '../../../store'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  moment: {
    height: "calc(100vh)",
    // '&:-webkit-user-select': 'none',  /* Chrome all / Safari all */
    // '&:-moz-user-select': 'none',     /* Firefox all */
    // '&:-ms-user-select': 'none',      /* IE 10+ */
    // '&:-user-select': 'none' ,    
  },
  grid: {
    position: 'fixed'
  },
  // selectNone: {
  //   '&:-webkit-user-select': 'none',  /* Chrome all / Safari all */
  //   '&:-moz-user-select': 'none',     /* Firefox all */
  //   '&:-ms-user-select': 'none',      /* IE 10+ */
  //   '&:-user-select': 'none'   
  // }
}))

export function Game (props) {  
  const [globalState, globalActions] = useGlobal()
  const history = useHistory()
  if (globalState.matrix.length === 0) {    
    history.push("/")
  }
  const classes = useStyles();
  const [momentIdx, setMomentIdx] = useState(0)
  let sat = 10
  let ppp = 0
  function handlePP(pp) {
    ppp = ppp + pp
    if (sat <= ppp) {
      setMomentIdx(momentIdx + 1)
      ppp = 0
    }
    // if (pp > idx) {
    //   setPP(0)
    // }
    // else {
    //   setPP(pp + plus + 2)
    // }
  }
  return (
    <Grid container justify="center" className={classes.grid} >
      
        <Card>
          
        
          <CardActionArea >
            <Cookie handlePP={(pp) => handlePP(pp)}> 
            <img alt="" 
              className={classes.moment} 
              src={globalState.level.pix[momentIdx].src}
            >              
            </img>
            
            
            </Cookie>
          </CardActionArea>
          
        </Card>
       {/* <img alt="" className={classes.fullHeight} src="https://lh3.googleusercontent.com/Q2pE7BbwYPNn_jt9_Fng7jzkwxcbEAmk6wJ4EH8UgkKLKiSASIDumXk0Q1VwsZn89kABNnfuzN-M9xkgM9TvYwhPeEDqxHeZKAYP0T32jsZvAAFH3bqCH6_UkAAPNgVqA0frMRtXNfC1YyBzpPjfk2IMHFDJzq0rjLNLjt2wwCr50cK4pBiIuBsNt3ysvNskGItOQduspOIiu3ZW_pK_WhMGZaNylZfzvG_8GKYTrnHFiVCusmIu54NUwTT56Gk48Jpid7E3-6lDpNd2zQRSyh4NM8wiKvO6nsMDxThjrM2Poj1Vji4Q-JdzNlYaYwhXIwzx3zaDUfoRWSY_ZyQPoCpWcS_jSxjB-EEJru2aGxsUNYOmqYzjW0-AmUl3vQ2DvvehQV4flcY0DSQu34U8Fo2ATIGWAPmr1o_zxJA6KgxVKJeXJADQAXbJXi3Ii2JaCLJjI5eIHxKTW8KYyCEuTOEt7E4dEPmCCdSVEGqJC68CNDK405eqHWhF88onm0eObztW7MWbG62V99hITmowwHXI2DAm7cxJWnGZkIi1GZ26_IJ04wgkan1yvQPxnY4q2UnxcjBtAauGLs1LjwV6c1CWcgJIzE8M8bbZCFdLPzgcw4jnvNV9XKbrjjGqaIzzv8e0AI_q_on6as3RLmXu1tm2NhDctfdHuoJECqDM_zhoFDwIHcaSwebm_43bmDMl9DNLlo2cWep8QgiU6pAu4Gg50suMlz5nzg4jYniYil8bgktM6A"></img> */}
      
    </Grid>
  )

}