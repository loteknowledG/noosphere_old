import React from 'react'
import GooglePicker from 'react-google-picker';
import { Button } from '@material-ui/core';

export function Picker(props) {
  return (
    <GooglePicker clientId={'your-client-id'}
              developerKey={'your-developer-key'}
              scope={['https://www.googleapis.com/auth/drive.readonly']}
              onChange={data => console.log('on change:', data)}
              onAuthenticate={token => console.log('oauth token:', token)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={false}
              mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
              viewId={'DOCS'}>
      <Button>Hi</Button>
    </GooglePicker>
  )
}
export default Picker