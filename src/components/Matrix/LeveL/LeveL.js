import React, { memo, useGlobal } from 'reactn'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Cover from './Cover'
import Grid from "./Grid"
import Write from "./Write"
import { MiniDrawer } from '../../MiniDrawer/MiniDrawer'
import { useHistory } from "react-router-dom"

export function LeveL (props) {  
  const [level, setLevel] = useGlobal('level')  
  
  let history = useHistory();
  if (level === undefined) {
    history.push("/matrix")
  }
  return (
    <>
      <MiniDrawer />
      <Cover />
      <Grid />       
      {level && level.pix.length > 0 &&
        <Write  />
      }     
      
    </>
  )
}

export default memo(LeveL)