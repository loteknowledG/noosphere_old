import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Magazine } from './components/Magazine/Magazine'
import { Matrix } from './components/Matrix/Matrix'
import { Play } from './components/Play/Play'
import { Tune } from './components/Matrix/Tune'
import { Terminus } from './components/Terminus/Terminus'
import './App.css'
import 'typeface-roboto'


import { ThemeProvider } from 'styled-components'

const theme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#bd0707',
    },
    secondary: {
      main: '#ffc510',
    },
    background: {
      default: '#4c69f6',
      paper: '#4c94f6',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Roboto',
    },
    fontFamily: 'Bangers',
    caption: {
      fontFamily: 'Do Hyeon',
    },
    overline: {
      fontFamily: 'Do Hyeon',
    },
    body2: {
      fontFamily: 'Roboto',
    },
  },
};

const queryClient = new QueryClient()
function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HashRouter basename="/">
          <Switch>    
            <Route exact path="/magazine" component={Magazine} />                
            <Route exact path="/matrix" component={Matrix} />
            <Route exact path="/play" component={Play} />
            <Route exact path="/tune" component={Tune} />
            <Route path="/" component={Terminus} />
          </Switch>
        </HashRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
