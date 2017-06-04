import React, { Component } from 'react'
import { BuyInEvent } from '../model/events'
import PropTypes from 'prop-types'

export default class BuyInAction extends Component {
  static propTypes = {
    appendEvent: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      buyIn: 200
    }

    this.buyInChanged = this.buyInChanged.bind(this)
  }

  buyInChanged(event) {
    this.setState({buyIn: event.target.value})
  }
  
  render() {
    return (
      <div>
        <input value={this.state.buyIn} onChange={this.buyInChanged}></input>      
        <button onClick={() => this.props.appendEvent(BuyInEvent(this.state.buyIn))}>Buy In</button>
      </div>
    )
  }
}
