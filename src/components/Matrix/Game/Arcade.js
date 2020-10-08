import React from 'react'
import Coverflow from 'react-coverflow'
import { Terminus } from '../../Terminus/Terminus'
import useGlobal from '../../../store'

export function Arcade() {  
  const [globalState, globalActions] = useGlobal()
  var fn = function () {
    /* do you want */  
  }

  function Levels () {
    return globalState.matrix.map((level, idx) => {
      console.log(level, idx)
      if (idx === 0) {
        return (
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >         
            <img
              src={level.cover}
              alt='title or description'
              style={{ display: 'block', width: '100%' }}
            />
          </div>
        )
      } else {
        return (
          <img src={level.cover}
            alt='title or description' 
            data-action="http://andyyou.github.io/react-coverflow/"
          />
        )
      }
    })
  }
  
  function Covers() {
    return (
      globalState.matrix.length > 0 ?
        <Coverflow
          displayQuantityOfSide={2}
          navigation={false}
          infiniteScroll
          enableHeading
          width={'auto'}
          height={543}          
        >       
          <Levels /> 
        </Coverflow> : <></>
    )
  }
  return (<><Terminus children={<><Covers/></>} /></>)
}