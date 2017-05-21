import { callRemote } from './gapi'

export const getRows = () => callRemote('getRows', [])
export const appendRow = row => callRemote('appendRow', [row])