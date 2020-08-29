import React, { memo, useGlobal } from 'reactn'
import Cover from './Cover'
import Grid from "./Grid"
import Write from "./Write"

export function Scenario (props) {  
  const [scenario, setScenario] = useGlobal('scenario')  
  const pix = JSON.parse(scenario).pix
  return (
    <>
      <Cover />
      <Grid />       
      {pix.length > 0 &&
        <Write />
      }     
    </>
  )
}

export default memo(Scenario)