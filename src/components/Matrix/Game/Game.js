import React, { useRef, useState } from 'react'
import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core'
import { Cookie } from '../Cookie/Cookie'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from 'framer-motion'
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
  const constraintsRef = useRef(null);
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
        <motion.div ref={constraintsRef} >
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
        </motion.div>      
    </Grid>
  )

}