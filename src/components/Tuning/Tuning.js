import React, { useEffect, useState, useRef } from 'react'
import { Card, Grid } from '@material-ui/core'
import useGlobal from '../../store'
import { motion } from "framer-motion";
import { Back } from './Back'

export function Tuning () {
  const [globalState, globalActions] = useGlobal()

  return (<>
    <Back/>
  </>);
}

export default Tuning