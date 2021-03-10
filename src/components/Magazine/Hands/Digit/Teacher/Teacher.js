import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Teach, FileExport } from 'mdi-material-ui'
import { Fab, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, WhoIsNext } from "@material-ui/core"
import streamSaver from "streamsaver";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 200
  },
  fab: {
    margin: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  speedDial: {
    margin: theme.spacing(1)
  },
  title: {
    fontSize: 14
  }
}));
 /*________                     __                     
|  _   _  |                    [  |                    
|_/ | | \_|.---.  ,--.   .---.  | |--.  .---.  _ .--.  
    | |   / /__\\`'_\ : / /'`\] | .-. |/ /__\\[ `/'`\] 
   _| |_  | \__.,// | |,| \__.  | | | || \__., | |     
  |_____|  '.__.'\'-;__/'.___.'[___]|__]'.__.'[__*/
export function Teacher(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [lession, setLession] = useState("");
  const [markers, setMarkers] = useState([])
  // const [markers, setMarkers] = useGlobal("markers");
  // const [markerSize, setMarkerSize] = useGlobal("markerSize");
  const [open, setOpen] = React.useState(false);
  // const [selectedMarker, setSelectedMarker] = useGlobal("selectedMarker");  
  // const [profileToken, setProfileToken] = useGlobal('profileToken')

  const handleClick = event => {
    if (markers) {
      markers.push({
        lession: "",
        height: 100,
        width: 100
      });
      setMarkers(markers);
    } else {
      setMarkers([
        {
          lession: "",
          height: 100,
          width: 100
        }
      ]);
    }
    // setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSelect = lession => {
    setLession(lession);
    setAnchorEl(null);
    // if (markers) {
    //   markers.push({
    //     lession: lession,
    //     height: 100,
    //     width: 100
    //   });
    //   setMarkers(markers);
    // } else {
    //   setMarkers([
    //     {
    //       lession: lession,
    //       height: 100,
    //       width: 100
    //     }
    //   ]);
    // }
  };
  // const onSave = () => {
  //   if (markers) {
  //     const fileStream = streamSaver.createWriteStream("teacher.giz", {
  //       size: 22, // (optional) Will show progress
  //       writableStrategy: undefined, // (optional)
  //       readableStrategy: undefined // (optional)
  //     });
  //     if (fileStream) {
  //       new Response(
  //         `{ 
  //           "header": { 
  //               "girl": "Ashlee Cox",
  //               "event": "",
  //               "type": "teacHer"
  //           },     
  //           // "markers": ${JSON.stringify(markers)} 
  //         }`
  //       ).body.pipeTo(fileStream);
  //     }
  //   }
  //   setOpen(false);
  // };
  
  // if (profileToken === undefined) {
  //       return (<div></div>)
  //   } else {
      return (
        
        <div>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <Teach />
            </ListItemIcon>
            <ListItemText primary="Teacher" />
          </ListItem>       
        </div>
      )
    // }
}
