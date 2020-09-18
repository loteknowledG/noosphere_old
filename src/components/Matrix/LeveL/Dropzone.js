import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export function Dropzone(props) {  
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        props.handleFileRead(JSON.parse(reader.result ))
      }
      reader.readAsText(file)
    })
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      Drag 'n' drop some Matrix files here, or click to select files      
    </div>
  )
}