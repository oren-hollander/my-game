import React, { Component } from 'react'
import { START_SESSION } from './eventKeys'

const createStartSessionEvent = location => ({
  type: START_SESSION,
  location,
  ts: new Date().toISOString()
})

export default class StartSessionAction extends Component {
  render() {
    return (
      <div>
        <input ref={location => {this.location = location}}></input>      
        <button onClick={() => this.props.appendEvent(createStartSessionEvent(this.location.value))}>Start Session</button>
      </div>
    )
  }
}
