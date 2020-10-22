import React from 'react'
import { LoginVariant } from 'mdi-material-ui'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, IconButton, Popover } from '@material-ui/core'

const useStyles = makeStyles(theme => ({        
  fab: {
      margin: theme.spacing(1)
  },
  popover: {
  }
}))

export function Google () {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  if (profileToken) {
    return (
        <>
            <Avatar src={(profileToken.Pt && profileToken.Pt.QK) || (profileToken.Tt && profileToken.Tt.SK) || (profileToken.Qt && profileToken.Qt.MK)} onClick={ onClick} /> 
            <Popover            
                open={open}
                anchorEl={anchorEl}
                className={classes.popup}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >                      
                <Account />
            </Popover>
        </>
    )
} else {
    return (
        <IconButton onClick={() => { authenticate().then(loadClient) }}>
            <LoginVariant />
        </IconButton>
    )
}
}