import React, { useState, useGlobal} from 'reactn'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, TextField, Toolbar, Typography } from '@material-ui/core'
import clsx from 'clsx';
import { ChevronLeft, ChevronRight, CubeUnfolded, FormatTitle, HeadLightbulbOutline, Menu, MessageTextOutline, Rss, Store } from 'mdi-material-ui';
import { Login } from './Login/'
import { Syndicate } from '../Syndicate'
import { Matrix } from '../Matrix/'
import { MiniDrawer } from '../MiniDrawer'
import { Link as RouterLink } from 'react-router-dom';

export function Terminus(props) {
    return (
        <MiniDrawer />
    )
}
export default Terminus