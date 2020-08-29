import React, { useEffect, useState, useGlobal, useRef } from 'reactn'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Fab, Grid, Paper } from '@material-ui/core';
import { useFetch } from '../../hooks'
import { Plus } from 'mdi-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  paper: {
    height: 345,
    width: 345,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));                                                                 
                                      /*    ,,                                
   .M"""bgd                         `7MM    db                   mm           
  ,MI    "Y                           MM                         MM           
  `MMb.  `7M'   `MF'`7MMpMMMb.   ,M""bMM  `7MM  ,p6"bo   ,6"Yb.mmMMmm .gP"Ya  
    `YMMNq.VA   ,V    MM    MM ,AP    MM    MM 6M'  OO  8)   MM  MM  ,M'   Yb 
  .     `MM VA ,V     MM    MM 8MI    MM    MM 8M        ,pm9MM  MM  8M"""""" 
  Mb     dM  VVV      MM    MM `Mb    MM    MM YM.    , 8M   MM  MM  YM.    , 
  P"Ybmmd"   ,V     .JMML  JMML.`Wbmd"MML..JMML.YMbmd'  `Moo9^Yo.`Mbmo`Mbmmd' 
            ,V                                                                
         OO*/                                                                       
export function Syndicate(props) {
  const classes = useStyles()

  function list() {
    // if (window.gapi.client.drive) {
    //   return window.gapi.client.drive.files.list({})
    //     .then(function(response) {
    //       // Handle the results here (response.result has the parsed body).
    //       let matrix = response.result.files.find(file => {
    //         return file.name === '23407 matrix'                      
    //       })
    //       // 23407 matrix found
    //       if (matrix) {
    //         return matrix
    //       } else { // create 23407
  
    //       }
    //       console.log(matrix)
    //     },
    //     function(err) { console.error("Execute error", err) })
    // } else {
    //   return []
    // }
  }/*
   _     _  _    _|_ _ 
  (/_>< (/_(_ |_| |_(/_
*/list()
  return (
      <>
        <Fab className={classes.fab} color="primary" aria-label="add">
          <Plus />
        </Fab>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {[0, 1, 2, 3, 4 ].map((value) => (
                <Grid key={value} item>
                  <Card className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </>
  )
}

