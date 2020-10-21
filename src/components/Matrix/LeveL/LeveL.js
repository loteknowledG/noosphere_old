import React, { memo } from 'react'
import Cover from './Cover'
import GridEdit from './GridEdit'
import { Redirect } from 'react-router-dom'
import useGlobal from '../../../store'
import TopBar from './TopBar'

export function LeveL (props) {  
  const [globalState, globalActions] = useGlobal()
  if (globalState.level.pix[0].src === '') {
    return <Redirect to="/" push={true} />
  }
  return (
    <><TopBar /><Cover /><GridEdit  /></>)
}

export default memo(LeveL)