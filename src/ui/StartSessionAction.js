import React, { Component } from 'react'
import { START_SESSION } from '../model/eventKeys'
import { StartSessionEvent } from '../model/events'

export default class StartSessionAction extends Component {
  render() {
    return (
      <div>
        <input ref={location => {this.location = location}}></input>      
        <button onClick={() => this.props.appendEvent(StartSessionEvent(this.location.value))}>Start Session</button>
      </div>
    )
  }
}
