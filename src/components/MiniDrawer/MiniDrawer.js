import React, { useState, useGlobal} from 'reactn'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, TextField, Toolbar, Typography } from '@material-ui/core'
import { ChevronLeft, ChevronRight, CubeUnfolded, FormatTitle, HeadLightbulbOutline, Menu, MessageTextOutline, Rss, Store } from 'mdi-material-ui';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Syndicate } from '../Syndicate'
import clsx from 'clsx';
import { Login } from '../Terminus/Login/Login'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  brandText: {
    flexGrow: 1,
    fontFamily: 'monospace',
    position: 'relative',
    whiteSpace: 'pre'
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing(8),
    marginTop: theme.spacing(7),    
    padding: theme.spacing(3)
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
  hide: {
    display: 'none',
  },
  login: {
    paddingRight: theme.spacing(3)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    marginTop: theme.spacing(8)
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },  
}))

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export function MiniDrawer() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)  
  const handleDrawerOpen = () => { setOpen(true) }
  const handleDrawerClose = () => { setOpen(false) }

  function Options() {
    return (<>
      <List>
        <ListItemLink to="/matrix" primary="Matrix" icon={<CubeUnfolded />} />          
      </List>
      <Divider />
      <List>
        <ListItemLink to="/message" primary="Message" icon={<MessageTextOutline />} />          
      </List>  
      <List>
        <ListItemLink to="/note" primary="Note" icon={<HeadLightbulbOutline />} />           
      </List>  
      <Divider />
      <List>
        <ListItemLink to="/store" primary="Store" icon={<Store />} /> 
      </List>
      <List>
        <ListItemLink to="/syndicate" primary="Syndicate" icon={<Syndicate />} /> 
      </List>        
    </>)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Login />
          :   :
          <Typography
              className={classes.brandText}
              color="primary">    
              888b    |   ,88~~\     ,88~~\                    888                                <br/> 
              |Y88b   |  d888   \   d888   \   d88~\ 888-~88e  888-~88e  e88~~8e  888-~\  e88~~8e <br/>
              | Y88b  | 88888    | 88888    | C888   888  888b 888  888 d888  88b 888    d888  88b<br/>
              |  Y88b | 88888    | 88888    |  Y88b  888  8888 888  888 8888__888 888    8888__888<br/>
              |   Y88b|  Y888   /   Y888   /    888D 888  888P 888  888 Y888    , 888    Y888    ,<br/>
              |    Y888   `88__/     `88__/   \_88P  888-_88"  888  888  "88___/  888     "88___/ <br/>
              |                                      888<br/>                      
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.spacer} />
        <Divider />
        <Options />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />       
          {/* {sector === 'matrix' && <Matrix />}               
          {sector === 'note' && <Note />}  
          {sector === 'syndicate' && <Syndicate />}  
          {sector === 'level' && <LeveL />}  */}
          {/* {sector === 'scenario' && <Scenario />}    */}
      </main>
    </div>
  );
}
