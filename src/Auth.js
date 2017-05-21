import React from 'react';

const SignIn = ({signIn}) => 
  <div>
    You are signed out
    <button onClick={signIn}>Sign In</button>
  </div>

const SignOut = ({signOut}) =>
  <div>
    You are signed in
    <button onClick={signOut}>Sign Out</button>
  </div>

const Auth = ({signedIn, signIn, signOut}) => 
  <div>
    {signedIn ? <SignOut signOut={signOut}/> : <SignIn signIn={signIn}/>}
  </div>

export default Auth