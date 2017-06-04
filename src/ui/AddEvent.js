import React from 'react'
import { END_SESSION } from '../model/eventKeys'
import BuyInAction from './BuyInAction'
import EndSessionAction from './EndSessionAction'

const AddEvent = ({lastEvent, appendEvent}) => 
  lastEvent.type === END_SESSION 
    ? <div>Session Ended</div>
    : <div>
        <BuyInAction appendEvent={appendEvent}/>
        <EndSessionAction appendEvent={appendEvent}/>
      </div>

export default AddEvent