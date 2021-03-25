import React, { useEffect, useRef, useState } from 'react'
import { Card, CardActionArea, Grid, LinearProgress } from '@material-ui/core'
import useGlobal from '../../store'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useWindowDimensions } from  '../../hooks/useWindowDimensions'
import { Cookie } from './Cookie/Cookie'
import { motion } from 'framer-motion'
import { Controller } from './controller/Controller'
import { useViewport } from 'react-viewport-hooks';
import { Bases } from './Bases'
import { Teacher } from './Teacher'
import { Back } from './Back'



const useStyles = makeStyles((theme) => ({    
  moment: {
    height: "calc(100vh)",  
  },
  grid: {
    position: 'fixed',
    overflow: 'hidden'
  },
  drag: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    height: '10%',
    width: '10%',
  },
}))

export function Play () {  
  const classes = useStyles()
  const [globalState, globalActions] = useGlobal()
  const history = useHistory()
  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)
  const { height, width } = useWindowDimensions()
  const { vw, vh } = useViewport({updateOnResize: true})
  const progressRef = useRef(() => {})
  const imgRef = useRef(null)
  // useEffect(() => {
  //   progressRef.current = () => {
  //     if (progress > 100) {
  //       setProgress(0)
  //       setBuffer(10)
  //     } else {
  //       const diff = Math.random() * 10
  //       const diff2 = Math.random() * 10
  //       setProgress(progress + diff)
  //       setBuffer(progress + diff + diff2)
  //     }
  //   }
  // })
  
  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])

  if (globalState.matrix.length === 0) {    
    history.push("/")
  }

  
  const [momentIdx, setMomentIdx] = useState(0)
  const [monentIdxs, setMomentIdxs] = useState([0, 1])
  const [ppp, setPpp] = useState(0)
  const constraintsRef = useRef()

  function handlePP(pp) {
    setPpp(ppp + pp) 
    if (ppp >= 100) {
      setMomentIdx(momentIdx + 1)
      setMomentIdxs([momentIdx + 1, momentIdx + 2])
      setPpp(0)
    }    
  }

  

  return (
    <>      
      <Grid container justify="center" className={classes.grid} ref={constraintsRef}>
        <Card id="card">
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
          <CardActionArea >            
              <Cookie handlePP={(pp) => handlePP(pp)}> 
                <img alt="" 
                  className={classes.moment} 
                  src={globalState.now.play.pix[momentIdx].src}
                  ref={imgRef}
                />                                       
              </Cookie>            
          </CardActionArea>          
        </Card>      
      </Grid>
      
      <motion.div className={classes.drag} drag dragConstraints={constraintsRef} >
        <Controller ppp={ppp} />
      </motion.div>   
      <Back />  
      
    </>
  )
}
export default Play

