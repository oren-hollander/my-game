import React, { Component } from 'react'
import { BUY_IN } from '../model/eventKeys'
import { BuyInEvent } from '../model/events'

export default class BuyInAction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 200
    }

    this.buyInChanged = this.buyInChanged.bind(this)
  }

  buyInChanged(event) {
    this.setState({value: event.target.value})
  }
  
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.buyInChanged}></input>      
        <button onClick={() => this.props.appendEvent(BuyInEvent(this.state.value))}>Buy In</button>
      </div>
    )
  }
}
