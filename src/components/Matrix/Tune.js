import React, { useEffect, useState } from 'react'

import useGlobal from '../../store'
import { makeStyles } from '@material-ui/core/styles'
import Gallery from "react-photo-gallery"

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

export function Tune () {
  
  const [globalState, globalActions] = useGlobal()
  return (
    <>
    </>
  )
}