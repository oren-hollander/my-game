import { APPEND_EVENT, SIGN_IN, SIGN_OUT, SHOW_VIEW, SET_CURRENT_SESSION } from './actions'
import { VIEW_LOG, VIEW_SESSION } from '../ui/View'

const defaultState = {
  currentSession: null,
  view: VIEW_LOG,
  signedIn: false,
  events: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case SHOW_VIEW: 
      switch(action.view){
        case VIEW_SESSION:
          return {...state, view: VIEW_SESSION, currentSession: action.session}
        default:
          return {...state, view: action.view}
      }
    case SET_CURRENT_SESSION:
      return {...state, currentSession: action.session}
    case APPEND_EVENT:
      return {...state, events: [...state.events, action.event]}
    case SIGN_IN: 
      return {...state, signedIn: true}
    case SIGN_OUT: 
      return {...state, signedIn: false, events: []}
    default:
      return state
  }
}

export default reducer