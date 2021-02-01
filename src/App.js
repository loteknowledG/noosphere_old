import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { overrideThemeVariables } from 'ui-neumorphism'
import { LeveL } from './components/Matrix/LeveL/LeveL'
import { Magazine } from './components/Magazine/Magazine'
import { Matrix } from './components/Matrix/Matrix'
import { Play } from './components/Play/Play'
import { Terminus } from './components/Terminus/Terminus'
import './App.css'
import 'typeface-roboto'
import 'ui-neumorphism/dist/index.css'

const queryClient = new QueryClient()
function App() {
  overrideThemeVariables({
    '--light-bg': '#E9B7B9',
    '--light-bg-dark-shadow': '#ba9294',
    '--light-bg-light-shadow': '#ffdcde',
    '--dark-bg': '#292E35',
    '--dark-bg-dark-shadow': '#21252a',
    '--dark-bg-light-shadow': '#313740',
    '--primary': '#8672FB',
    '--primary-dark': '#4526f9',
    '--primary-light': '#c7befd'
  })
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/level" component={LeveL} />     
          <Route exact path="/magazine" component={Magazine} />                
          <Route exact path="/matrix" component={Matrix} />
          <Route exact path="/play" component={Play} />
          <Route path="/" component={Terminus} />
        </Switch>
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App
