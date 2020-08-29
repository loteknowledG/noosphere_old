import React, { memo, useGlobal } from 'reactn'
import Cover from './Cover'
import Grid from "./Grid"
import Write from "./Write"
import { MiniDrawer } from '../../MiniDrawer/MiniDrawer'

export function LeveL (props) {  
  const [level, setLevel] = useGlobal('level')  
  const gifs = JSON.parse(level).pix
  return (
    <>
      <MiniDrawer />
      <Cover />
      <Grid />       
      {gifs.length > 0 &&
        <Write />
      }     
      
    </>
  )
}

export default memo(LeveL)