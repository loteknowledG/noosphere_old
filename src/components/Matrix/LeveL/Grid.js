import React, { useState, memo }  from "react"
import arrayMove from "array-move"
import Gallery from "react-photo-gallery"
import { SortableContainer, SortableElement } from "react-sortable-hoc"
import Photo from "./Photo"
import useGlobal from "../../../store";


/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
))

export function Grid (props) {  
  const [globalState, globalActions] = useGlobal()
  
  
  const moments = globalState.level ? globalState.level.pix.map((src, idx) => {
    return {
      key: idx.toString(),
      src: src,
      width: 4,
      height: 4
  }}) : []
  const [items, setItems] = useState(moments);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  }

  return (
  <>
    <SortableGallery
      items={items}
      onSortEnd={onSortEnd}
      axis={"xy"}
    />    
  </>
  )
}
export default memo(Grid)