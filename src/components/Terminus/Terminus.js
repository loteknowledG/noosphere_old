import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import { Cog, Menu, Post, Rss } from 'mdi-material-ui'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Upload } from './Upload'
import { Stories } from './Stories'
import { Matrix } from '../Matrix/Matrix'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  brandText: {
    flexGrow: 1,
    fontFamily: 'monospace',
    fontSize: 7,
    marginBotton: 7,
    position: 'relative',
    whiteSpace: 'pre'
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
}));

export function Terminus(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
      {[{text: 'Stories', icon: <Post/>}, {text: 'Syndicate', icon: <Rss/>}].map((item, index) => (
          <ListItem button key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="transparent" elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
<pre className={`${classes.brandText} ${classes.neon}`}> 
888b    |   ,88~~\     ,88~~\                    888                                <br/> 
|Y88b   |  d888   \   d888   \   d88~\ 888-~88e  888-~88e  e88~~8e  888-~\  e88~~8e <br/>
| Y88b  | 88888    | 88888    | C888   888  888b 888  888 d888  88b 888    d888  88b<br/>
|  Y88b | 88888    | 88888    |  Y88b  888  8888 888  888 8888__888 888    8888__888<br/>
|   Y88b|  Y888   /   Y888   /    888D 888  888P 888  888 Y888    , 888    Y888    ,<br/>
|    Y888   `88__/     `88__/   \_88P  888-_88"  888  888  "88___/  888     "88___/ <br/>
|                                      888                                          <br/>                      
</pre>          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Stories /> */}
        <Matrix />
      </main>
      <Upload />
    </div>
  );
}

Terminus.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Terminus;