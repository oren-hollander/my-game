import React from 'react'
import { connect } from 'react-redux'
import Events from './Events'
import { selectAllEvents } from '../model/selectors'

const AllEvents = connect(state => ({events: selectAllEvents(state)}))(Events)

const Log = ({showSessions}) => 
  <div>
    <button onClick={showSessions}>Sessions</button>
    <AllEvents/>
  </div>

export default Log