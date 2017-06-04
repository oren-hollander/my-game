import React from 'react'
import { connect } from 'react-redux'

import Auth from './Auth'
import { gapiSignIn, gapiSignOut, showSessions, showLog } from '../model/actions'

import { selectView } from '../model/selectors'
import View from './View'
import Link from './Link'

const ConnectedAuth = connect(
  state => ({signedIn: state.signedIn}), 
  dispatch => ({
    signIn: () => dispatch(gapiSignIn()),
    signOut: () => dispatch(gapiSignOut())})
)(Auth)

const CurrentView = connect(
  state => ({
    view: selectView(state)
  })
)(View)

const LinkToView = connect(
  null,
  (dispatch, {showView}) => ({
    onClick: () => dispatch(showView())
  })
)(Link)

const App = () => 
  <div style={{textAlign: 'center'}}>
    <ConnectedAuth/>
    <LinkToView showView={showSessions}>Sessions</LinkToView> 
    &nbsp;
    <LinkToView showView={showLog}>Log</LinkToView>
    <CurrentView/>
  </div>

export default App
