import { appendRow, getRows } from './eventsAPI'
import { forEach } from 'lodash/fp'
import { codec } from './eventCodec'
import { START_SESSION, BUY_IN, END_SESSION } from './eventKeys'
import { signIn as signInGapi, signOut as signOutGapi } from './gapi'

export const SIGN_IN = 'sign-in'
export const SIGN_OUT = 'sign-out'
export const APPEND_EVENT = 'append-event'

export const signIn = () => ({type: SIGN_IN})
export const signOut = () => ({type: SIGN_OUT})
export const appendEvent = event => ({type: APPEND_EVENT, event})

const codecs = {
  [START_SESSION]: codec(['ts', 'location']),
  [BUY_IN]: codec(['ts', 'amount']),
  [END_SESSION]: codec(['ts', 'amount'])
}

export const loadEvents = () => dispatch => {
  getRows().then(forEach(row => {
    const type = row[0]
    const event = codecs[type].decode(row)
    dispatch(appendEvent(event))
  }))
}

export const saveEvent = event => dispatch => {
  const row = codecs[event.type].encode(event)
  appendRow(row).then(() => {
    dispatch(appendEvent(event))
  })
}

export const gapiSignIn = () => dispatch => {
  signInGapi().then(() => {
    dispatch(signIn())
    dispatch(loadEvents())
  })
}

export const gapiSignOut = () => dispatch => {
  signOutGapi().then(() => {
    dispatch(signOut())
  })
}