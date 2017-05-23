import { START_SESSION, END_SESSION, BUY_IN } from './eventKeys'

export const StartSessionEvent = location  => ({
  type: START_SESSION,
  location,
  ts: new Date().toISOString()
})

export const EndSessionEvent = amount => ({
  type: END_SESSION,
  amount,
  ts: new Date().toISOString()
})

export const BuyInEvent = amount => ({
  type: BUY_IN,
  amount,
  ts: new Date().toISOString()
})