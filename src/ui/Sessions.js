import React from 'react'
import { connect } from 'react-redux'

import Events from './Events'
import { selectSessions } from '../model/selectors'

const SessionEvents = connect(state => ({events: selectSessions(state)}))(Events)

const Sessions = ({sessions}) =>
  <div>
    Sessions
    <SessionEvents/>
  </div>

export default Sessions