import React, { useGlobal } from "reactn";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
 /*:=======  :::====  :::====  :::  === :::===== :::==== 
 ::: === === :::  === :::  === ::: ===  :::      :::  ===
 === === === ======== =======  ======   ======   ======= 
 ===     === ===  === === ===  === ===  ===      === === 
 ===     === ===  === ===  === ===  === ======== ===  =*/
 export function Marker(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      color: "#fff",
      fontSize: "32px",
      fontFamily: 'PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      fontWeight: 200,
      textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      display: "flex"
    },
    box: {
      width: props.marker.width,
      height: props.marker.height,
      // borderRadius: '100%',
      background: "#fff",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      position: "absolute",

      // left: props.marker.offsetX,
      // top: props.marker.offsetY,
      zIndex: 1,
      opacity: 0.5,
      filter: "alpha(opacity=50)" /* For IE8 and earlier */
    }
  }));
  const { id, image, selected } = props;
  const classes = useStyles();
  const [selectedMarker, setSelectedMarker] = useGlobal("selectedMarker");
  const [markers, setMarkers] = useGlobal("markers");
  // 23407-1337
  // >3407-1337

  function onDragEnd(event, info) {
    const marker = markers[id];
    marker.id = id;
    marker.pageX = event.pageX;
    marker.pageY = event.pageY;
    marker.image = image;
    setSelectedMarker(id);
  }

  const style = {
    borderStyle: selected ? "solid" : "none",
    borderColor: "#e91e63",
    borderRadius: 37
  }
    
  return (
    <>
      <motion.button
        className={classes.box}
        id={id}
        style={style}
        drag
        dragConstraints={props.constraintsRef}
        onDragEnd={onDragEnd}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.0 }}
      >
        {/* <Label className="label">{props.marker.lession}</Label> */}
      </motion.button>      
    </>
  );
}
