import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Fade, Popper }  from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
}));
  

export function Watcher (props) {    
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        props.handleClick(anchorEl ? null : event.currentTarget)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
        <button aria-describedby={id} type="button" onClick={handleClick}>
            Toggle Popper
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.paper}>The content of the Popper.</div>
        </Popper>
        </div>
    );
}