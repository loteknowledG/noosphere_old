import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Dialog, Fab, IconButton, ListItem, ListItemIcon, ListItemText, Slide, TextField, Toolbar, Typography } from '@material-ui/core'
import { Close, Firebase } from 'mdi-material-ui'
import streamSaver from 'streamsaver'

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    fab: {
      margin: theme.spacing(1),
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})/*   __          _    _                             __   _              
 (__)_(__)        (_)_ (_)_  ____  _      ____       (__) (_) _____  ____ 
(_) (_) (_)  ____ (___)(___)(____)(_)__  (____) ____  (_)  _ (_____)(____)
(_) (_) (_) (____)(_)  (_) (_)_(_)(____)(_)_(_)(____) (_) (_)  _(_)(_)_(_)
(_)     (_)( )_( )(_)_ (_)_(__)__ (_)   (__)__( )_( ) (_) (_) (_)__(__)__ 
(_)     (_) (__)_) (__) (__)(____)(_)    (____)(__)_)(___)(_)(_____)(___*/                                                                         
export function Matterealize (props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    // const [profileToken, setProfileToken] = useGlobal('profileToken')
    function getFileExtension (filename) {
        var re = /(?:\.([^.]+))?$/
        var ext = re.exec(filename)[1];
    }
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleChangeTextField = (event) => {
        setText(event.target.value)
    }
    function onMaterialize () {
        const fileStream = streamSaver.createWriteStream('matteReaLize.giz', {
            size: 22, // (optional) Will show progress
            writableStrategy: undefined, // (optional)
            readableStrategy: undefined  // (optional)
        })
        var isValidJSON = true;
        try { JSON.parse(text) } catch { isValidJSON = false }
        if (!isValidJSON) {
            new Response(text
                .split(',')
                .filter(gif => gif.startsWith('["https://lh3'))
                .map(gif => gif.replace(/(\[\"|\")/g, '').replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/\]/g, ''))
            ).body.pipeTo(fileStream)            
            props.handleMatterealize(text
                .split(',')
                .filter(gif => gif.startsWith('["https://lh3'))
                .map(gif => gif.replace(/(\[\"|\")/g, '').replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/\]/g, ''))
            )
        } 
        else {
            const json = JSON.parse(text)
            props.handleTeacHer(json)
        }
    }
    // if (profileToken === undefined) {
    //     return (<div></div>)
    // } else {
        return (
            <>
                <ListItem button onClick={handleClickOpen} >
                    <ListItemIcon>
                        <Firebase />
                    </ListItemIcon>
                    <ListItemText primary="Matterealize" />
                </ListItem>            
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <Close />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                        Matterealize
                        </Typography>
                        <Button color="inherit" onClick={() => {
                            onMaterialize();
                            handleClose();
                        }}>
                        Materialize
                        </Button>
                    </Toolbar>
                    </AppBar>
                    <TextField id="outlined-full-width" label="Matterealize" style={{ margin: 8 }} placeholder="Paste html content"
                        margin="normal" variant="outlined" multiline rows="33" InputLabelProps={{ shrink: true }} 
                        onChange={handleChangeTextField}
                    />
                </Dialog>
            </>
        )
    // }
}