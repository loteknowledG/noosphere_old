import React from "react"
import "./App.css"
import { HashRouter, Route, Switch } from "react-router-dom"
import { Magazine } from "./components/Magazine/Magazine"
import { Terminus } from "./components/Terminus/Terminus"
import { Picker } from "./components/Picker/Picker"
import { Game } from "./components/Matrix/Game/Game"
import { Matrix } from "./components/Matrix/Matrix"
import { LeveL } from "./components/Matrix/LeveL/LeveL"
import { Terminal2 } from "./components/Terminal2/Terminal2"
import 'typeface-roboto';
// import { CreampieCathy } from "./components/Sites";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/picker" component={Picker} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/matrix" component={Matrix} />
        <Route exact path="/level" component={LeveL} />
        <Route exact path="/terminal2" component={Terminal2} />
        <Route path="/" component={Terminus} />
        
      </Switch>
    </HashRouter>
  );
}

export default App;
