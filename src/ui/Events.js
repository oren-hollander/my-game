import React from 'react'
import { map, isEmpty } from 'lodash/fp'
import { START_SESSION, BUY_IN, END_SESSION } from '../model/eventKeys'
import { connect } from 'react-redux'
import { VIEW_SESSION } from './View'
import { showView, setCurrentSession } from '../model/actions'

const StartSession = ({showSessionView, event}) => 
  <div>
    <a href="" onClick={() => showSessionView(event)} >Session started at {event.ts}, at {event.location}</a>
  </div>

const BuyIn = ({event}) => 
  <div>
    Bought in at {event.ts} for {event.amount} 
  </div>

const EndSession = ({event}) => 
  <div>
    Session ended at {event.ts} with {event.amount}
  </div>

const ConnectedStartSession = connect(
  null, 
  dispatch => ({
    showSessionView: session => {
      dispatch(setCurrentSession(session))
      dispatch(showView(VIEW_SESSION))
    }
  })
)(StartSession)

const getEventComponent = type => {
  switch(type){
    case BUY_IN:
      return BuyIn
    case START_SESSION:
      return ConnectedStartSession
    case END_SESSION:
      return EndSession
    default:
      return () => <div>Error</div>
  }
}

const Events = ({events}) => isEmpty(events)
  ? <div>Nothing to show</div>
  : <div>
      {
        map(event => { 
          const Comp = getEventComponent(event.type)
          return <Comp key={event.ts} event={event}/> 
        }, events) 
      }
    </div>

export default Events
