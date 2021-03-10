import React, { useEffect, useState, useRef } from 'react'
import { Card, CardActionArea, Grid, LinearProgress } from '@material-ui/core'
import { motion } from "framer-motion";
import useGlobal from '../../store'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  moment: {
    height: "calc(100vh)",  
  },
  grid: {
    position: 'fixed',
    overflow: 'hidden'
  },
  marker: {
    background: 'white',
    borderRadius: 30,
    width: 150,
    height: 150,
    position: 'absolute',
    top: 'calc(50% - 150px / 2)',
    left: 'calc(50% - 150px / 2)'
  }
  
}))

export function Tune () {
  const classes = useStyles();
  const constraintsRef = useRef(null);
  const [globalState, globalActions] = useGlobal()
  const pic = globalActions.getTune()
  if (pic) {
    return (<>
      <Grid container justify="center" className={classes.grid}>
      <Card>
          <motion.div className="drag-area" ref={constraintsRef} >
            <img alt="" 
              className={classes.moment} 
              src={pic.src}
            />                  
          </motion.div>     
          <motion.div className="marker" drag dragConstraints={constraintsRef} />     
        </Card> 
      </Grid>
    </>)
  }
  return (null)
}