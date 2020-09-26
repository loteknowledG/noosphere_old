import React from "react"
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styled from "styled-components"
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
} from "@mui-treasury/layout"
import {
  NavHeaderMockUp,
} from '@mui-treasury/mockup/layout'
import { CssBaseline, Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { CubeUnfolded, HeadLightbulbOutline, MessageTextOutline, Rss, Store, GamepadSquareOutline  } from 'mdi-material-ui'
import { Login1 } from './Login/Login1' 

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const Footer = getFooter(styled)
const scheme = Layout()

function ListItemLink(props) {
  const { icon, primary, to } = props

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}
ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

scheme.configureHeader((builder) => {
  builder
    .create("appHeader")
    .registerConfig("xs", {
      position: "sticky",
      initialHeight: 100,
    })
    .registerConfig("md", {
      position: "relative", // won't stick to top when scroll down
    })
})

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      anchor: "left",
      width: "auto", // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig("md", {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
      headerMagnetEnabled: true,
    })
})

const useStyles = makeStyles((theme) => ({
  brandText: {
    flexGrow: 1,
    fontFamily: 'monospace',
    fontSize: 7,
    marginBotton: 7,
    position: 'relative',
    whiteSpace: 'pre'
  },
  content: {
    cellspacing: 3
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

export function Terminus ({ children })  {
  const classes = useStyles()
  return (
    <Root scheme={scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="primarySidebar" />
              <Typography className={`${classes.brandText} ${classes.neon}`} color="primary"><br/><br/>    
              888b    |   ,88~~\     ,88~~\                    888                                <br/> 
              |Y88b   |  d888   \   d888   \   d88~\ 888-~88e  888-~88e  e88~~8e  888-~\  e88~~8e <br/>
              | Y88b  | 88888    | 88888    | C888   888  888b 888  888 d888  88b 888    d888  88b<br/>
              |  Y88b | 88888    | 88888    |  Y88b  888  8888 888  888 8888__888 888    8888__888<br/>
              |   Y88b|  Y888   /   Y888   /    888D 888  888P 888  888 Y888    , 888    Y888    ,<br/>
              |    Y888   `88__/     `88__/   \_88P  888-_88"  888  888  "88___/  888     "88___/ <br/>
              |                                      888<br/>                      
            </Typography>
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId="primarySidebar">
            <SidebarContent>
              {/* <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} /> */}
              <Login1 />
              <List>
                <ListItemLink to="/game" primary="Game" icon={<GamepadSquareOutline />} />
              </List>
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
                <ListItemLink to="/syndicate" primary="Syndicate" icon={<Rss />} />
              </List>
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <Content className={classes.content}>
            { children }
          </Content>
          <Footer>
          </Footer>
        </>
      )}
    </Root>
  )
}

export default Terminus
