import React, { useState } from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'


function Marker () {
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [top, setTop] = useState(100)
  const [left, setLeft] = useState(100)
  const [rotateAngle, setRotateAngle] = useState(0)
  const initialState = {
    
    // store: [
    //   { id: 1, name: "V-6 engine", price: 1500 },
    //   { id: 2, name: "Racing detail package", price: 1500 },
    //   { id: 3, name: "Premium sound system", price: 500 },
    //   { id: 4, name: "Rear spoiler", price: 250 }
    // ]
  };

  handleRotate = (rotateAngle) => {
    this.setState({
      rotateAngle
    })
  }
  
    handleDrag = (deltaX, deltaY) => {
      this.setState({
        left: this.state.left + deltaX,
        top: this.state.top + deltaY
      })
    }
  }

  // const {width, top, left, height, rotateAngle} = this.state
  return (
    <div className="App">
      <ResizableRect
        left={left}
        top={top}
        width={width}
        height={height}
        rotateAngle={rotateAngle}
        // aspectRatio={false}
        // minWidth={10}
        // minHeight={10}
        zoomable='n, w, s, e, nw, ne, se, sw'
        // rotatable={true}
        // onRotateStart={this.handleRotateStart}
        onRotate={this.handleRotate}
        // onRotateEnd={this.handleRotateEnd}
        // onResizeStart={this.handleResizeStart}
        onResize={this.handleResize}
        // onResizeEnd={this.handleUp}
        // onDragStart={this.handleDragStart}
        onDrag={this.handleDrag}
        // onDragEnd={this.handleDragEnd}
      />
    </div>
  )
  
}