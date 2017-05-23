import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker'
import './index.css'

import { init as initGAPI } from './api/gapi'
import { signIn, signOut, loadEvents } from './model/actions'
import reducer from './model/reducer'
import App from './ui/App'

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

// const mapStateToProps = ({signedIn}) => ({signedIn})
// const mapDispatchToProps = dispatch => ({
//   signIn: () => dispatch(gapiSignIn()),
//   signOut: () => dispatch(gapiSignOut())
// })

// const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
  
render(
  <Provider store={store}>
    <App/>
  </Provider>,     
  document.getElementById('root')
)

registerServiceWorker();
