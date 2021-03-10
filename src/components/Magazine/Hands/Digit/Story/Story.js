import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Fab, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import { ViewDashboardOutline } from 'mdi-material-ui'

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    icon: {
        marginRight: theme.spacing(1),
    },    
}))

export function Story (props) {
    const classes = useStyles()    
    // const [profileToken, setProfileToken] = useGlobal('profileToken')
    // if (profileToken === undefined) {
    //     return (<div></div>)
    // } else {
        return (              
            <div>
                <ListItem button >
                    <ListItemIcon>
                        <ViewDashboardOutline /> 
                    </ListItemIcon>
                    <ListItemText primary="Story" />                       
                </ListItem>
            </ div>
        )
    // }
}