import React, { Component } from 'react'
import { BUY_IN } from './eventKeys'

const createBuyInEvent = amount => ({
  type: BUY_IN,
  amount,
  ts: new Date().toISOString()
})

export default class BuyInAction extends Component {
  render() {
    return (
      <div>
        <input ref={amount => {this.amount = amount}} defaultValue={200}></input>      
        <button onClick={() => this.props.appendEvent(createBuyInEvent(this.amount.value))}>Buy In</button>
      </div>
    )
  }
}
