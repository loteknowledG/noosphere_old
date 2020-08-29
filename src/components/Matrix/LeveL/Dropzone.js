import React, {useCallback, useGlobal} from 'reactn'
import {useDropzone} from 'react-dropzone'
import { uuid } from '../../Utility/uuid'
import { useHistory } from "react-router-dom";

export function Dropzone(props) {
  
  const { onClose } = props

  const [level, setLevel] = useGlobal('level')
  const [sector, setSector] = useGlobal('sector')  
  const [LeveLUuid, setLeveLUuid] = useGlobal('LeveLUuid')
  let history = useHistory();
  console.log(history)
  // const onDrop = useCallback((acceptedFiles) => { 
  //   // console.log(acceptedFiles[0].File)
    
  //   acceptedFiles.forEach((file) => {
  //     // const abortController = new AbortController()
  //     // const signal = abortController.signal
  //     const reader = new FileReader()
      
  //     reader.onabort = () => console.log('file reading was aborted')
  //     reader.onerror = () => console.log('file reading has failed')
  //     reader.onload = () => {
  //     // Do whatever you want with the file contents
  //       setLevel(reader.result)  
                      
  //       let levelUuid = uuid()
  //       setLeveLUuid(levelUuid) 
  //       setSector('level')
        
  //     }
  //     reader.readAsText(file)
  //   })
  //   // setTimeout(function(){    }, 300)
  // }, [])

  // const {getRootProps, getInputProps} = useDropzone({onDrop})
  function handleClick() {
    
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const textStr = reader.result
        console.log(textStr)
        setLevel(textStr)  
        onClose()
        console.log(history)
        history.push("/level");
        // setSector('level')
      }
      reader.readAsText(file)
    })
    // setSector('level')
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})


  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}