import React, { memo  } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Cover from './Cover'
import Grid from "./Grid"
import Write from "./Write"
import { MiniDrawer } from '../../MiniDrawer/MiniDrawer'
import { useHistory, Redirect  } from "react-router-dom"
import useGlobal from "../../../store"

export function LeveL (props) {  
  let history = useHistory();
  const [globalState, globalActions] = useGlobal()
  if (globalState.level.pix.length === 0) {
    //history.push("/")
    return <Redirect to="/" push={true} />

  }
  // const [level, setLevel] = useGlobal('level')  
  
  // let history = useHistory();
  // if (globalStatelevel === undefined) {
  //   history.push("/matrix")
  // }
  return (
    <>
      <MiniDrawer />
      <Cover />
      <Grid />       
      {globalState.level.pix && globalState.level.pix.length > 0 &&
        <Write  />
      }     
      
    </>
  )
}

export default memo(LeveL)