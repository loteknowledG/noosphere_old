import React, { useEffect, useState, useRef } from 'react'
import { Card, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useGlobal from '../../store'
import { motion } from "framer-motion";
import { Controller } from './controller/Controller'
import { Back } from './Back'

const useStyles = makeStyles((theme) => ({    
  moment: {
    height: "calc(100vh)",  
  },
  grid: {
    position: 'fixed',
    overflow: 'hidden'
  },
}))


export function Tuning () {
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal()
  const constraintsRef = useRef()

  return (<>
    <Grid container justify="center" className={classes.grid} ref={constraintsRef}>
        <Card>
          <img alt="" 
            className={classes.moment} 
            src={globalActions.getTuning().src}
          />
        </Card>
    </Grid>
    <motion.div className={classes.drag} drag dragConstraints={constraintsRef} >
      <Controller />
    </motion.div> 
    <Back/>
  </>);
}

export default Tuning