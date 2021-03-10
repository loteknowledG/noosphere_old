import React, {useState} from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Button, Collapse, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core'
// import {  } from '@material-ui/icons'
import { ChevronLeft, LoginVariant, Menu, PlayBoxMultipleOutline, Rss, SafeSquareOutline } from 'mdi-material-ui'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom'
import CollapseOnScroll from './CollapseOnScroll'
import SignIn from './SignIn'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',    
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }, 
  brandText: {
    flexGrow: 1,
    fontFamily: 'monospace',
    fontSize: 7,
    position: 'relative',
    whiteSpace: 'pre',
  },
  neon: {
    color: 'whitesmoke',
    textShadow:
      '0 0 3px #9D33FF,' +
      '0 0 5px #9D33FF,' +
      '0 0 10px #9D33FF,' +
      '0 0 20px #9D33FF,' +
      '0 0 40px #9D33FF,' +
      '0 0 50px #9D33FF'   
  },

}))

export function Navigator() {
  const classes = useStyles()
  const theme = useTheme()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)


 

  return (    
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar
        color="transparent" elevation={0} position="fixed" 
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>setDrawerOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: drawerOpen,
            })}>
            <Menu />
          </IconButton>
          <CollapseOnScroll>
<pre className={`${classes.brandText} ${classes.neon}`}> 
888b    |   ,88~~\     ,88~~\                    888                                <br/> 
|Y88b   |  d888   \   d888   \   d88~\ 888-~88e  888-~88e  e88~~8e  888-~\  e88~~8e <br/>
| Y88b  | 88888    | 88888    | C888   888  888b 888  888 d888  88b 888    d888  88b<br/>
|  Y88b | 88888    | 88888    |  Y88b  888  8888 888  888 8888__888 888    8888__888<br/>
|   Y88b|  Y888   /   Y888   /    888D 888  888P 888  888 Y888    , 888    Y888    ,<br/>
|    Y888   `88__/     `88__/   \_88P  888-_88"  888  888  "88___/  888     "88___/ <br/>
|                                      888                                          <br/>                      
</pre>
<SignIn />
        </CollapseOnScroll>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }),
        }}>
        <div className={classes.toolbar}>
          <IconButton onClick={()=>setDrawerOpen(false)}>
            {drawerOpen ?  <ChevronLeft /> : null }
          </IconButton>
        </div>
        <Divider />
        <List>
      {[
          {text: 'NowPlaying', icon: <PlayBoxMultipleOutline />}, 
          {text: 'Syndicate', icon: <Rss/>},
          {text: 'Safe', icon: <SafeSquareOutline />}
        ].map((item, idx) => (
          <Link to={"/" + item.text} style={{ textDecoration: 'none' }}>
            <ListItem 
              button               
              selected={selectedIndex === idx}
              key={item.text} 
              onClick={(event) => { setSelectedIndex(idx) }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem> 
          </Link>
        ))}
       {/* </List>
          <Link to="/NowPlaying" style={{ textDecoration: 'none' }}>
            <ListItem 
              button               
              selected={selectedIndex === 0}
              key="NowPlaying" 
              onClick={(event) => { setSelectedIndex(0) }}>
              <ListItemIcon><PlayBoxMultipleOutline /></ListItemIcon>
              <ListItemText primary="Now Playing" />
            </ListItem>
          </Link>
          <Link to="/Syndicate" style={{ textDecoration: 'none' }}>
            <ListItem 
              button               
              selected={selectedIndex === 1}
              key="Syndicate" 
              onClick={(event) => { setSelectedIndex(1) }}>
              <ListItemIcon><Rss/></ListItemIcon>
              <ListItemText primary="Syndicate" />
            </ListItem>
          </Link>

        <List> */}

      </List>
      </Drawer>
      
    </div>
  );
}
export default Navigator