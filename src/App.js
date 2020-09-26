import React from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Magazine } from './components/Magazine/Magazine'
import { Terminus } from './components/Terminus/Terminus'
import { Picker } from './components/Picker/Picker'
import { Arcade } from './components/Matrix/Game/Arcade'
import { Matrix } from './components/Matrix/Matrix'
import { LeveL } from './components/Matrix/LeveL/LeveL'
import 'typeface-roboto'

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/picker" component={Picker} />
        <Route exact path="/game" component={Arcade} />
        <Route exact path="/matrix" component={Matrix} />
        <Route exact path="/level" component={LeveL} />
        <Route path="/" component={Terminus} />
      </Switch>
    </HashRouter>
  )
}

export default App
