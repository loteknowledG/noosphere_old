import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Fab, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Draggable from 'react-draggable';
import TerminalInReact from 'terminal-in-react';
import { Console } from 'mdi-material-ui'

function PaperComponent(props) {
    return (
      <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

const useStyles = makeStyles(theme => ({    
    fab: {
      margin: theme.spacing(1), 
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    dialogContent: {
        width: 333
    }
}));                                  
 /*_  ___/                                                     
   / /   ___      __      _   __     ( )   __      ___     //  
  / /  //___) ) //  ) ) // ) )  ) ) / / //   ) ) //   ) ) //   
 / /  //       //      // / /  / / / / //   / / //   / / //    
/ /  ((____   //      // / /  / / / / //   / / ((___( ( */     
export function Terminal (props) {
    const classes = useStyles();       
    // const [profileToken, setProfileToken] = useGlobal('profileToken')
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const showMsg = () => 'Hello World'
    // if (profileToken === undefined) {
    //     return (<div></div>)
    // } else {
        return (    
            <div>
                <ListItem button onClick={handleClickOpen}>
                    <ListItemIcon>
                        <Console />
                    </ListItemIcon>
                    <ListItemText primary="Terminal" />
                </ListItem>             
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Terminal
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh"
                            }}
                        >
                            <TerminalInReact
                                color='green'
                                backgroundColor='black'
                                barColor='black'
                                style={{ fontWeight: "bold", fontSize: "1em" }}
                                commands={{
                                    'open-google': () => window.open('https://www.google.com/', '_blank'),
                                    showmsg: showMsg,
                                    popup: () => alert('Terminal in React')
                                }}
                                descriptions={{
                                    'open-google': 'opens google.com',
                                    showmsg: 'shows a message',
                                    alert: 'alert', popup: 'alert'
                                }}
                                msg='shes a queen of diamonds' 
                            />
                        </div>
                    <DialogContentText>
                        
                    </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        )
    // }
}