import React, { memo } from 'react'
import Cover from './Cover'
import GridSort from "./GridSort"
import GridEdit from './GridEdit'
import Write from "./Write"
import { Terminus } from '../../Terminus/Terminus'
import { Redirect } from 'react-router-dom'
import useGlobal from '../../../store'
import TopBar from './TopBar'

export function LeveL (props) {  
  const [globalState, globalActions] = useGlobal()
  if (globalState.level.pix[0].src === '') {
    return <Redirect to="/" push={true} />
  }
  return (
    <><TopBar /><Cover /><GridEdit zoomIn={true} /></>)
}

export default memo(LeveL)