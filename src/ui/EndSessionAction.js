import React, { Component } from 'react'
import { EndSessionEvent } from '../model/events'
import PropTypes from 'prop-types'

export default class EndSessionAction extends Component {
  static propTypes = {
    appendEvent: PropTypes.func.isRequired
  }
  
  constructor(props) {
    super(props)
    this.state = {
      cashOut: 0
    }

    this.cashOutChanged = this.cashOutChanged.bind(this)
  }

  cashOutChanged(event) {
    this.setState({cashOut: event.target.value})
  }

  render() {
    return (
      <div>
        <input value={this.state.cashOut} onChange={this.cashOutChanged}></input>      
        <button onClick={() => this.props.appendEvent(EndSessionEvent(this.state.cashOut))}>End Session</button>
      </div>
    )
  }
}

