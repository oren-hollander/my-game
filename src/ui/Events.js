import React from 'react'
import { map, isEmpty } from 'lodash/fp'
import { START_SESSION, BUY_IN, END_SESSION } from '../model/eventKeys'
import Link from './Link'

const StartSession = ({event}) => 
  <div>
    Session started at {event.ts}, at {event.location}
  </div>

const BuyIn = ({event}) => 
  <div>
    Bought in at {event.ts} for {event.amount} 
  </div>

const EndSession = ({event}) => 
  <div>
    Session ended at {event.ts} with {event.amount}
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

const Events = ({events, showSession}) => isEmpty(events)
  ? <div>Nothing to show</div>
  : <div>
      {
        map(event => { 
          const Comp = getEventComponent(event.type)
          return event.type === START_SESSION && showSession 
            ? <Link key={event.ts} onClick={e => {showSession(event)}}><Comp event={event}/></Link>
            : <Comp key={event.ts} event={event}/> 
        }, events) 
      }
    </div>

export default Events
