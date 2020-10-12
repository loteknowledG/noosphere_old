import React from 'react'
import Coverflow from 'react-coverflow'
import { Terminus } from '../../Terminus/Terminus'
import useGlobal from '../../../store'
import { StyleRoot } from 'radium'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  fullHeight: {
    height: "calc(100vh)"
  },
  grid: {
    position: 'fixed'
  },
  // selectNone: {
  //   '&:-webkit-user-select': 'none',  /* Chrome all / Safari all */
  //   '&:-moz-user-select': 'none',     /* Firefox all */
  //   '&:-ms-user-select': 'none',      /* IE 10+ */
  //   '&:-user-select': 'none'   
  // }
}))

export function Arcade() {  
  const classes = useStyles()
  const [globalState, globalActions] = useGlobal()
  const history = useHistory()
  var fn = function () {
    /* do you want */  
  }

  
  
  function Covers() {    
    return (
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={2}
          navigation={false}
          clickable={true}
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
  return (<><Terminus children={<Covers/>} /></>)
}