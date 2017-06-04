import React, { Component } from 'react'
import { StartSessionEvent } from '../model/events'
import PropTypes from 'prop-types'

export default class StartSessionAction extends Component {
  static propTypes = {
    appendEvent: PropTypes.func.isRequired
  }
  
  render() {
    return (
      <div>
        <input ref={location => {this.location = location}}></input>      
        <button onClick={() => this.props.appendEvent(StartSessionEvent(this.location.value))}>Start Session</button>
      </div>
    )
  }
}
