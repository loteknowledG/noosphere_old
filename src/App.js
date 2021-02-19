import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NowPlaying } from './components/NowPlaying'
import { Magazine } from './components/Magazine/Magazine'
import { Matrix } from './components/Matrix/Matrix'
import { Navigator } from './components/Navigator'
import { Tune } from './components/Matrix/Tune'
import { Syndicate } from './components/Syndicate/Syndicate'
import { Play } from './components/Play/Play'
import { Back } from './components/Play/Back'
import { IO } from './components/IO/IO'
import './App.css'
import 'typeface-roboto'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter basename="/">
        <Switch>    
          <Route exact path="/magazine" component={Magazine} />                
          <Route exact path="/matrix" component={Matrix} />            
          <Route exact path="/nowPlaying" >
            <Navigator />
            <NowPlaying />   
            <IO />           
          </Route>
          <Route exact path="/play">              
            <Play />
            <Back/>
          </Route>              
          <Route exact path="/tune" component={Tune} />
          <Route exact path="/syndicate" component={Syndicate} />
          <Route path="/" >
          <Navigator />
            <NowPlaying />
            <IO />
          </Route>
        </Switch>
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App
