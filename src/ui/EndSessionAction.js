import React, { Component } from 'react'
import { END_SESSION } from '../model/eventKeys'
import { EndSessionEvent } from '../model/events'

export default class EndSessionAction extends Component {
  render() {
    return (
      <div>
        <input ref={amount => {this.amount = amount}}></input>      
        <button onClick={() => this.props.appendEvent(EndSessionEvent(this.amount.value))}>End Session</button>
      </div>
    )
  }
}

