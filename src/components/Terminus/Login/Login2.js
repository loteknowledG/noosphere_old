import React from 'react'
import GooglePicker from 'react-google-picker'
import { Button } from '@material-ui/core'

export function Login2() {  
  return (<GooglePicker clientId={'951030999356-u51qqgcjepmp5d7vnc3ne0vkttnsqq60.apps.googleusercontent.com'}
    developerKey={'AIzaSyDW4LZ0gVG9X_2r7muG5a06YlM9MBlj8zY'}
    scope={['https://www.googleapis.com/auth/drive.readonly']}
    onChange={data => console.log('on change:', data)}
    onAuthFailed={data => console.log('on auth failed:', data)}
    multiselect={true}
    navHidden={true}
    authImmediate={false}
    mimeTypes={['application/json']}
    query={'a query string like .txt or fileName'}
    viewId={'DOCS'}>
    <Button>pick</Button>
  </GooglePicker>)
}
export default Login2