import { branch, renderNothing } from 'recompose'

export const ifSignedIn = branch(
  props => !props.signedIn,
  renderNothing
)
