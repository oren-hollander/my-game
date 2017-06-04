import { callRemote } from './gapi'

const spreadsheetId = '1lXg_dR2Tf3jp_ufpeYLWuLEjIePVbn6Ol3PaFLU00BY'
const sheetName = 'sessions'

export const getRows = () => callRemote('getRows', [spreadsheetId, sheetName])
export const appendRow = row => callRemote('appendRow', [spreadsheetId, sheetName, row])
export const getRow = rowId => callRemote('getRow', [spreadsheetId, sheetName, rowId])
export const deleteRow = rowId => callRemote('deleteRow', [spreadsheetId, sheetName, rowId])
export const updateRow = (rowId, row) => callRemote('getRow', [spreadsheetId, sheetName, rowId, row])