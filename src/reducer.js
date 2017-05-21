import { APPEND_EVENT, SIGN_IN, SIGN_OUT } from './actions'

const defaultState = {
  signedIn: false,
  events: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
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