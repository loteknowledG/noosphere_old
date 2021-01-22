import React, { useEffect, useState } from 'react'



export function Login3() {    
  const [name, setName] = useState()
  const [googleAuth, setGoogleAuth] = useState()  
  const  SCOPE  =  'https://www.googleapis.com/auth/drive.file';
  const  discoveryUrl  =  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
  useEffect(() => {
    var script = document.createElement('script');
    script.onload=handleClientLoad;
    script.src="https://apis.google.com/js/api.js";
    document.body.appendChild(script);
  }, []);

  function handleClientLoad () {
    window.gapi.load('client:auth2', initClient);
  }
  
  function signInFunction () {
    googleAuth.signIn();
    updateSigninStatus()
  }

  function signOutFunction () {
    googleAuth.signOut();
    updateSigninStatus()
  }

  function updateSigninStatus  () {
    var user = googleAuth.currentUser.get();
    console.log(user)
    if (user.wc == null){
      setName('')
    }
    else{
      var isAuthorized = user.hasGrantedScopes(SCOPE);
      if(isAuthorized){
        setName(user.Ot.Cd)
        //we will put the code of the third step here
      }
    }
  }

  function initClient () {
    try{
      window.gapi.client.init({
          'apiKey': "AIzaSyCEmxFXur3r9rQhcVDxeQ7mUI_UH1XLqpk",
          'clientId': "951030999356-u51qqgcjepmp5d7vnc3ne0vkttnsqq60.apps.googleusercontent.com",
          'scope': SCOPE,
          'discoveryDocs': [discoveryUrl]
        }).then(() => {
          setGoogleAuth(window.gapi.auth2.getAuthInstance())
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(() => updateSigninStatus()) 
         document.getElementById('signin-btn').addEventListener('click', signInFunction)
         document.getElementById('signout-btn').addEventListener('click', signOutFunction);

      });
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="App">
      <div>UserName: <strong>{ name}</strong></div>
      <button id="signin-btn">Sign In</button>
      <button id="signout-btn">Sign Out</button>
    </div>
  )
}

export default Login3