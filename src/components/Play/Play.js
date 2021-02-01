import React, { useRef, useState } from 'react'
import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core'
import useGlobal from '../../store'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useWindowDimensions } from  '../../hooks/useWindowDimensions'
import { Cookie } from './Cookie/Cookie'
import { motion } from 'framer-motion'
import { Controller } from './Controller/Controller'
import { useViewport } from 'react-viewport-hooks';
import { Bases } from './Bases'

const useStyles = makeStyles((theme) => ({
  framer: {
    height: "calc(90vh)",
    width: "calc(80vw)"
  },
  moment: {
    height: "calc(100vh)",
    // '&:-webkit-user-select': 'none',  /* Chrome all / Safari all */
    // '&:-moz-user-select': 'none',     /* Firefox all */
    // '&:-ms-user-select': 'none',      /* IE 10+ */
    // '&:-user-select': 'none' ,    
  },
  grid: {
    position: 'fixed',
    overflow: 'hidden'
  },
  drag: {
    height: '10%',
    width: '10%',
  }
  
}))

export function Play (props) {  
  const [globalState, globalActions] = useGlobal()
  const history = useHistory()
  const { height, width } = useWindowDimensions()
  const { vw, vh } = useViewport({updateOnResize: true})

  if (globalState.matrix.length === 0) {    
    history.push("/")
  }
  const classes = useStyles();
  const [momentIdx, setMomentIdx] = useState(0)
  const [ppp, setPpp] = useState(0)
  const constraintsRef = useRef();  

  function handlePP(pp) {
    setPpp(ppp + pp) 
    if (ppp >= 100) {
      setMomentIdx(momentIdx + 1)
      setPpp(0)
    }    
  }

  return (
    <>
      <Bases />
      <Grid container justify="center" className={classes.grid} ref={constraintsRef}>
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
      </Grid>
      <motion.div className={classes.drag} drag dragConstraints={constraintsRef} >
        <Controller ppp={ppp} />
      </motion.div>      
    </>
    )
}
export default Play

