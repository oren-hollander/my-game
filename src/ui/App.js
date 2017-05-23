import React from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import Auth from './Auth'
import { gapiSignIn, gapiSignOut, showView } from '../model/actions'

import { selectView } from '../model/selectors'
import View, { VIEW_SESSIONS } from './View'

// const Div = ({children}) => <div>{children}</div>

// const getActiveActions = lastEvent => {
//   const type = get('type', lastEvent)
//   switch(type){
//     case START_SESSION:
//       return [BUY_IN, END_SESSION]
//     case BUY_IN:
//       return [BUY_IN, END_SESSION]
//     case END_SESSION:
//       return [START_SESSION]
//     default:
//       return [START_SESSION]
//   }
// }

/*const Actions = ({lastEvent, appendEvent}) => {
  const activeActions = getActiveActions(lastEvent)
  const MaybeBuyIn = includes(BUY_IN, activeActions) ? BuyInAction : () => null
  const MaybeEndSessio = includes(END_SESSION, activeActions) ? EndSessionAction : () => null

  const MaybeStartSession = includes(START_SESSION, activeActions) ? StartSessionAction : () => null
  // const ConnectedStartSession = connect(
  //   null,
  //   dispatch => ({
  //     startSession: () => dispatch(appendEvent(BuyInEvent()))
  //   })
  // )(MaybeActionsPanel)

  return (
    <div>
      <MaybeStartSession appendEvent={appendEvent}/>
      <MaybeBuyIn appendEvent={appendEvent}/>
      <MaybeEndSessio appendEvent={appendEvent}/>
    </div>
  )
}*/

// const ConnectedActions = connect(
//   state => ({
//     lastEvent: last(state.events)
//   }),
//   dispatch => ({
//     appendEvent: event => dispatch(saveEvent(event))
//   })
// )(Actions)

// const MaybeActionsPanel = compose(
//   connect(state => ({
//     signedIn: selectSignedIn(state)
//   }), 
//   ifSignedIn)
// )(Div)

const ConnectedAuth = connect(
  state => ({signedIn: state.signedIn}), 
  dispatch => ({
    signIn: () => dispatch(gapiSignIn()),
    signOut: () => dispatch(gapiSignOut())})
)(Auth)

const CurrentView = connect(
  state => ({
    view: selectView(state)
  }),
  dispatch => ({
    showSessions: () => dispatch(showView(VIEW_SESSIONS))
  })
)(View)

const App = () => 
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ConnectedAuth/>
    </div>

    <CurrentView/>
  </div>

export default App;
