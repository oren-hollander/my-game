import { createSelector } from 'reselect'
import { head, filter, last, dropWhile, takeWhile, negate, eq, concat } from 'lodash/fp'
import { START_SESSION, END_SESSION } from './eventKeys'

export const selectAllEvents = state => state.events 
export const selectCurrentSession = state => state.currentSession

const notEndSesionEvent = event => event.type !== END_SESSION

export const selectSessionEvents = createSelector (
  selectCurrentSession,
  selectAllEvents,
  (startEvent, events) => {
    if(!startEvent)
      return []

    const notStartEvent = negate(eq(startEvent))
    
    const skippedPriorEvents = dropWhile(notStartEvent, events)
    const startAndBuyInEvents = takeWhile(notEndSesionEvent, skippedPriorEvents)
    const maybeEndSessionEvent = head(dropWhile(notEndSesionEvent, skippedPriorEvents))

    return maybeEndSessionEvent ? concat(startAndBuyInEvents, maybeEndSessionEvent) : startAndBuyInEvents 
  }
)

export const selectLastEvent = createSelector (
  selectAllEvents,
  last
)

export const selectView = state => state.view
export const selectSignedIn = state => state.signedIn

export const selectSessions = state => filter(event => event.type === START_SESSION, state.events)