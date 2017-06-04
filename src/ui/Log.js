import React from 'react'
import { connect } from 'react-redux'
import Events from './Events'
import { selectAllEvents } from '../model/selectors'
import { showSession } from '../model/actions'

const AllEvents = connect(
  state => ({
    events: selectAllEvents(state)
  }),
  dispatch => ({
    showSession: session => {
      dispatch(showSession(session))
    }
  })
)(Events)

const Log = () => 
  <div>
    <AllEvents/>
  </div>

export default Log