import React from 'react'

import Session from './Session'
import Sessions from './Sessions'
import Log from './Log'

export const VIEW_LOG = 'log'
export const VIEW_SESSION = 'session'
export const VIEW_SESSIONS = 'sessions'

const View = ({view, showSessions}) => {
  switch(view){
    case VIEW_LOG: 
      return <Log showSessions={showSessions}/>
    case VIEW_SESSION:
      return <Session/>
    case VIEW_SESSIONS: 
      return <Sessions/>
    default:
      throw new Error(`Unknown view ${view}`)
  }
}

export default View