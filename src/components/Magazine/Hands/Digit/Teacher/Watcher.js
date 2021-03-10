import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardHeader, IconButton, Slider } from '@material-ui/core'
import { Tag } from './Tag'
import { Toilet } from 'mdi-material-ui'

const useStyles = makeStyles(theme => ({   
  card: {
      minWidth: 200,
      minHeight: 234
  },    
  title: {
      fontSize: 14,
  },
}));
/*     █░ ▄▄▄     ▄▄▄█████▓ ▄████▄   ██░ ██ ▓█████  ██▀███  
▓█░ █ ░█░▒████▄   ▓  ██▒ ▓▒▒██▀ ▀█  ▓██░ ██▒▓█   ▀ ▓██ ▒ ██▒
▒█░ █ ░█ ▒██  ▀█▄ ▒ ▓██░ ▒░▒▓█    ▄ ▒██▀▀██░▒███   ▓██ ░▄█ ▒
░█░ █ ░█ ░██▄▄▄▄██░ ▓██▓ ░ ▒▓▓▄ ▄██▒░▓█ ░██ ▒▓█  ▄ ▒██▀▀█▄  
░░██▒██▓  ▓█   ▓██▒ ▒██▒ ░ ▒ ▓███▀ ░░▓█▒░██▓░▒████▒░██▓ ▒██▒
░ ▓░▒ ▒   ▒▒   ▓▒█░ ▒ ░░   ░ ░▒ ▒  ░ ▒ ░░▒░▒░░ ▒░ ░░ ▒▓ ░▒▓░
  ▒ ░ ░    ▒   ▒▒ ░   ░      ░  ▒    ▒ ░▒░ ░ ░ ░  ░  ░▒ ░ ▒░
  ░   ░    ░   ▒    ░      ░         ░  ░░ ░   ░     ░░   ░ 
    ░          ░  ░        ░ ░       ░  ░  ░   ░  ░       
                           ░*/                                
export function Watcher (props) {
  const classes = useStyles();  
  // const [markers, setMarkers] = useGlobal('markers')  
  // const [selectedMarker, setSelectedMarker] = useGlobal('selectedMarker')

  const PrettoSlider = withStyles({
      root: {
        color: '#52af77',
        height: 8,
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
      }
  })(Slider);

  // function handleChangeHeight (event, value) {
  //   const marker = markers[selectedMarker]
  //   marker.height = value   
  //   setMarkers(markers)
  // }

  // function handleChangeWidth (event, value) {
  //   const marker = markers[selectedMarker]
  //   marker.width = value
  //   setMarkers(markers)
  // }

  // function handleToylet (event) {
  //   setMarkers(markers.filter((marker) => marker.id !== selectedMarker))
  //   setSelectedMarker(undefined)
  // }
  // if (markers && selectedMarker !== undefined) {
  //   const marker = markers[selectedMarker]
  //   return (
  //     <Card className={ classes.card }>
  //       <CardHeader 
  //         title={ marker.lession }
  //         action={
  //           <IconButton aria-label="toylet" className={classes.margin} onClick={handleToylet}>
  //             <Toilet />
  //           </IconButton>
  //         }
  //       />  
  //       <CardContent>
  //         height
  //         <PrettoSlider 
  //           valueLabelDisplay="auto" 
  //           aria-label="pretto slider" 
  //           defaultValue={marker ? marker.height : 100} 
  //           max={600} 
  //           onChangeCommitted={ handleChangeHeight }
  //         />
  //         width
  //         <PrettoSlider 
  //           valueLabelDisplay="auto" 
  //           aria-label="pretto slider" 
  //           defaultValue={marker ? marker.width : 100} 
  //           max={600} 
  //           onChangeCommitted={ handleChangeWidth }
  //         />          
  //       </CardContent>
  //     </Card> 
  //   )
  // } else {
    return (<></>)
  // }
}