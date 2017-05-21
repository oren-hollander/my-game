import React, { Component } from 'react'
import { END_SESSION } from './eventKeys'

const createEndSessionEvent = amount => ({
  type: END_SESSION,
  amount,
  ts: new Date().toISOString()
})

export default class EndSessionAction extends Component {
  render() {
    return (
      <div>
        <input ref={amount => {this.amount = amount}}></input>      
        <button onClick={() => this.props.appendEvent(createEndSessionEvent(this.amount.value))}>End Session</button>
      </div>
    )
  }
}

