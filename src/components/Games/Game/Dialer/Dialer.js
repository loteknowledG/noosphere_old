import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import {useSpring, animated} from 'react-spring'
import './dialer.css'

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export function Dialer (props) {  
  const [progress, setProgress] = React.useState(100);
  const { ppp } = props
  

  React.useEffect(() => {
    setProgress(100 - ppp)
  }, [ppp]);

  // const spring = useSpring({ value: 100, from: { value: 1 } }) 
  // <animated.span>{props.number}</animated.span>
  // console.log(spring.value)
  return (<>  
     
    <nav className="menu">      
      <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>        
      <label className="menu-open-button" htmlFor="menu-open">
        <span className="hamburger hamburger-1"></span>
        <span className="hamburger hamburger-2"></span>
        <span className="hamburger hamburger-3"></span>
      </label>      
      <a href="#" className="menu-item"><CircularProgressWithLabel size={80} value={progress} ><i className="fa fa-bar-chart"></i></CircularProgressWithLabel> </a>      
      <a href="#" className="menu-item"><CircularProgress size={80} variant="static" value={progress} ><i className="fa fa-plus"></i></CircularProgress> </a>
      <a href="#" className="menu-item"> <i className="fa fa-heart"></i> </a>
      <a href="#" className="menu-item"> <i className="fa fa-envelope"></i> </a>      
    </nav>    
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="shadowed-goo">                        
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
          <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
          <feComposite in2="shadow" in="goo" result="goo" />
          <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  </>)
}
export default Dialer