import { callRemote } from './gapi'

export const getRows = () => callRemote('getRows', [])
export const appendRow = row => callRemote('appendRow', [row])
export const getRow = rowId => callRemote('getRow', [rowId])
export const deleteRow = rowId => callRemote('deleteRow', [rowId])
export const updateRow = (rowId, row) => callRemote('getRow', [rowId, row])