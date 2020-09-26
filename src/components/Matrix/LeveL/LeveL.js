import React, { memo } from 'react'
import Cover from './Cover'
import Grid from "./Grid"
import Write from "./Write"
import { Terminus } from '../../Terminus/Terminus'
import { Redirect } from "react-router-dom"
import useGlobal from "../../../store"

export function LeveL (props) {  
  const [globalState, globalActions] = useGlobal()
  if (globalState.level.pix.length === 0) {
    return <Redirect to="/" push={true} />
  }
  return (
    <>
      <Terminus children={<><Cover /><Grid />{ globalState.level.pix && globalState.level.pix.length > 0 && <Write /> }</>} /></>)
}

export default memo(LeveL)