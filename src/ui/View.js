import React from 'react'
import { connect } from 'react-redux'
import { selectSessionEvents, selectLastEvent } from '../model/selectors'
import { END_SESSION } from '../model/eventKeys'

import Session from './Session'
import Sessions from './Sessions'
import Log from './Log'
import { saveEvent } from '../model/actions'

export const VIEW_LOG = 'log'
export const VIEW_SESSION = 'session'
export const VIEW_SESSIONS = 'sessions'

const ConnectedSession = connect(
  state => ({
    events: selectSessionEvents(state)
  }),
  dispatch => ({
    appendEvent: event => dispatch(saveEvent(event))
  })
)(Session)

const ConnectedSessions = connect(
  state => ({
    showStartSession: selectLastEvent(state).type === END_SESSION
  }),
  dispatch => ({
    appendEvent: event => dispatch(saveEvent(event))
  })
)(Sessions)


const View = ({view}) => {
  switch(view){
    case VIEW_LOG: 
      return <Log/>
    case VIEW_SESSION:
      return <ConnectedSession/>
    case VIEW_SESSIONS: 
      return <ConnectedSessions/>
    default:
      throw new Error(`Unknown view ${view}`)
  }
}

export default View