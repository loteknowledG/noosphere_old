import React, {useCallback, useGlobal} from 'reactn'
import {useDropzone} from 'react-dropzone'
import { uuid } from '../../Utility/uuid'

export function Dropzone() {
  const [level, setLevel] = useGlobal('level')
  const [sector, setSector] = useGlobal('sector')  
  const [LeveLUuid, setLeveLUuid] = useGlobal('LeveLUuid')
  
  const onDrop = useCallback((acceptedFiles) => {   
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        setLevel(reader.result)  
        setSector('level')                
        let levelUuid = uuid()
        setLeveLUuid(levelUuid)      
      }
    })
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}