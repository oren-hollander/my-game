import { tail, zip, map, fromPairs } from 'lodash/fp'

export const codec = keys => ({
  encode: event => [event.type, ...map(key => event[key], keys)],
  decode: row => ({type: row[0], ...fromPairs(zip(keys, tail(row)))})
})