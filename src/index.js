import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { init as initGAPI } from './gapi'
import { signIn, signOut, gapiSignIn, gapiSignOut, loadEvents, saveEvent } from './actions'
import reducer from './reducer'
import { Provider, connect } from 'react-redux'

const store = createStore(reducer, applyMiddleware(thunk))

const updateSignedInStatus = signedIn => {
  if(signedIn){
    store.dispatch(signIn())
    store.dispatch(loadEvents())
  }
  else {
    store.dispatch(signOut())
  }
}

initGAPI(updateSignedInStatus).then(updateSignedInStatus)

const mapStateToProps = ({events, signedIn}) => ({events, signedIn})
const mapDispatchToProps = dispatch => ({
  appendEvent: event => dispatch(saveEvent(event)),
  signIn: () => dispatch(gapiSignIn()),
  signOut: () => dispatch(gapiSignOut())
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
  
render(
  <Provider store={store}>
    <ConnectedApp/>
  </Provider>,     
  document.getElementById('root')
)

registerServiceWorker();
