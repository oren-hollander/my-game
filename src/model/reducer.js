import { APPEND_EVENT, SIGN_IN, SIGN_OUT, SHOW_VIEW, SET_CURRENT_SESSION } from './actions'
import { VIEW_LOG } from '../ui/View'

const defaultState = {
  currentSession: null,
  view: VIEW_LOG,
  signedIn: false,
  events: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case SHOW_VIEW: 
      return {...state, view: action.view}
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