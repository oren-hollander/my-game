import React from 'react'
import { map } from 'lodash/fp'
import { START_SESSION, BUY_IN, END_SESSION } from './eventKeys'

const StartSession = ({ts, location}) => 
  <div>
    Session started at {ts}, at {location}
  </div>

const BuyIn = ({ts, amount}) => 
  <div>
    Bought in at {ts} for {amount} 
  </div>

const EndSession = ({ts, amount}) => 
  <div>
    Session ended at {ts} with {amount}
  </div>

const getEventComponent = type => {
  switch(type){
    case BUY_IN:
      return BuyIn
    case START_SESSION:
      return StartSession
    case END_SESSION:
      return EndSession
    default:
      return () => <div>Error</div>
  }
}

const Events = ({events}) => 
  <div>
    {
      map(event => { 
        const Comp = getEventComponent(event.type)
        return <Comp key={event.ts} {...event}/> 
      }, events)    
    }
  </div>

export default Events
