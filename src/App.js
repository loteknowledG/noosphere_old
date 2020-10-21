import React from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Arcade } from './components/Games/Arcade/Arcade'
import { Game } from './components/Games/Game/Game'
import { LeveL } from './components/Matrix/LeveL/LeveL'
import { Magazine } from './components/Magazine/Magazine'
import { Matrix } from './components/Matrix/Matrix'
import { Picker } from './components/Picker/Picker'
import { Terminus } from './components/Terminus/Terminus'
import { Terminus1 } from './components/Terminus/Terminus1'
import 'typeface-roboto'

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/arcade" component={Arcade} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/picker" component={Picker} />        
        <Route exact path="/matrix" component={Matrix} />
        <Route exact path="/level" component={LeveL} />     
        <Route exact path="/terminus1" component={Terminus1} />
        <Route path="/" component={Terminus} />
      </Switch>
    </HashRouter>
  )
}

export default App
