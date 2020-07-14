import React, { useState, useGlobal, memo, useCallback }  from "reactn"
import arrayMove from "array-move";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from "./Photo";
import SelectedImage from "./SelectedImage";


/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
))

export function Grid (props) {  
  const [gifs, setGifs] = useGlobal('gifs')
  
  const moments = gifs.map((src, idx) => {
    return {
      key: idx.toString(),
      src: src,
      width: 4,
      height: 4
  }})
  const [items, setItems] = useState(moments);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  }/*
   _     _  _    _|_ _ 
  (/_>< (/_(_ |_| |_(/_
  */
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