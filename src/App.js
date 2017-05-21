import React from 'react'
import logo from './logo.svg'
import './App.css'
import Auth from './Auth'
import BuyInAction from './BuyInAction'
import StartSessionAction from './StartSessionAction'
import EndSessionAction from './EndSessionAction'
import { ifSignedIn } from './util'
import Events from './Events'
import { START_SESSION, BUY_IN, END_SESSION } from './eventKeys'
import { includes, last, get } from 'lodash/fp'

const Div = ({children}) => <div>{children}</div>
const MaybeActionsPanel = ifSignedIn(Div)

const getActiveActions = lastEvent => {
  const type = get('type', lastEvent)
  switch(type){
    case START_SESSION:
      return [BUY_IN, END_SESSION]
    case BUY_IN:
      return [BUY_IN, END_SESSION]
    case END_SESSION:
      return [START_SESSION]
    default:
      return [START_SESSION]
  }
}

const Actions = ({lastEvent, appendEvent}) => {
  const activeActions = getActiveActions(lastEvent)
  const MaybeBuyIn = includes(BUY_IN, activeActions) ? BuyInAction : () => null
  const MaybeStartSession = includes(START_SESSION, activeActions) ? StartSessionAction : () => null
  const MaybeEndSessio = includes(END_SESSION, activeActions) ? EndSessionAction : () => null
  
  return (
    <div>
      <MaybeStartSession appendEvent={appendEvent}/>
      <MaybeBuyIn appendEvent={appendEvent}/>
      <MaybeEndSessio appendEvent={appendEvent}/>
    </div>
  )
}

const App = ({signedIn, signIn, signOut, events, appendEvent}) => 
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>

    <Auth signedIn={signedIn} signIn={signIn} signOut={signOut}/>
    
    <Events events={events}/>
    <MaybeActionsPanel signedIn={signedIn}>
      <Actions lastEvent={last(events)} appendEvent={appendEvent}/>
    </MaybeActionsPanel>
  </div>

export default App;
