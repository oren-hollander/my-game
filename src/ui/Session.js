import React, { Component } from 'react'
import { connect } from 'react-redux'

import Events from './Events'
import { selectSessionEvents } from '../model/selectors'

const SessionEvents = connect(state => ({events: selectSessionEvents(state)}))(Events)

export default class Session extends Component {
  render() {
    return (
      <div>
        <SessionEvents/>
      </div>
    )
  }
}
