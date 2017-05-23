import React from 'react'

const SignIn = ({signIn}) => 
  <div>
    <p>You are signed out</p>
    <button onClick={signIn}>Sign In</button>
  </div>

const SignOut = ({signOut}) =>
  <div>
    <p>You are signed in</p>
    <button onClick={signOut}>Sign Out</button>
  </div>

const Auth = ({signedIn, signIn, signOut}) => 
  <div>
    {signedIn ? <SignOut signOut={signOut}/> : <SignIn signIn={signIn}/>}
  </div>

export default Auth