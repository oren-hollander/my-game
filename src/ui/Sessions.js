import React from 'react'
import { connect } from 'react-redux'

import Events from './Events'
import { selectSessions } from '../model/selectors'
import { showSession } from '../model/actions'
import StartSessionAction from './StartSessionAction'

const SessionEvents = connect(
  state => ({
    events: selectSessions(state)
  }),
  dispatch => ({
    showSession: session => {
      dispatch(showSession(session))
    }
  })
)(Events)

const Sessions = ({showStartSession, appendEvent}) =>
  <div>
    Sessions
    <SessionEvents/>
    {
      showStartSession 
        ? <StartSessionAction appendEvent={appendEvent}/>
        : null 
    }
  </div>

export default Sessions