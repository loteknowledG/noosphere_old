import React from 'react'
import Coverflow from 'react-coverflow'
import { Terminus } from '../../Terminus/Terminus'
import useGlobal from '../../../store'
import { StyleRoot } from 'radium'
import { makeStyles } from '@material-ui/core/styles'

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
  var fn = function () {
    /* do you want */  
  }

  
  
  function Covers() {
    console.log('covers')
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
              <img src={level.cover} alt={level.title} data-action=""/>    
            )  
          })}   
        </Coverflow>
      </StyleRoot>
    )
  }
  return (<><Terminus children={<Covers/>} /></>)
}