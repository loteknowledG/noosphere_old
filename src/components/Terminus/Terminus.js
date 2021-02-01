import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import { SafeSquareOutline, Menu, Post, Rss } from 'mdi-material-ui'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Navigator } from "../Navigator"




export function Terminus(props) {
  return (
    <>
      <Navigator />
    </>
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