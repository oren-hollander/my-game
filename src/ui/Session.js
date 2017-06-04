import React from 'react'

import Events from './Events'
import { last } from 'lodash/fp'

import AddEvent from './AddEvent'

const Session = ({events, appendEvent}) => 
  <div>
    <Events events={events}/>
    <AddEvent lastEvent={last(events)} appendEvent={appendEvent}/>
  </div>

export default Session