import React from 'react'
import Coverflow from 'react-coverflow'
// import { Dialer } from './Dialer'
import { Terminus } from '../../Terminus/Terminus'
import useGlobal from '../../../store'
import { StyleRoot } from 'radium'
import { useHistory } from 'react-router-dom'

export function Arcade() {  
  const [globalState, globalActions] = useGlobal()
  const history = useHistory()

  function Covers() {    
    return (
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={2}
          navigation
          clickable
          infiniteScroll
          enableHeading
          media={{
            '@media (max-width: 900px)': {
              height: 'calc(100vh)'
            },
            '@media (min-width: 900px)': {
              height:'calc(100vh)'
            }
          }}
        >
          { globalState.matrix.map((level, idx) => {    
              return (
                <img key={idx} src={level.cover} alt={level.title} onClick={() => { 
                  globalActions.setLevel(level)
                  globalActions.setLevelIdx(idx)
                  history.push("/game")
                }} />    
              )  
          })}   
        </Coverflow>
      </StyleRoot>
    )
  }
  return (<Terminus children={<Covers/>}/>)
}