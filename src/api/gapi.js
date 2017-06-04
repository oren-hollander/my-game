const gapi = window.gapi

const initData = {
  clientId: '650088418358-6t81k1vrhbrv4ekv38g1kt9s7lner4oo.apps.googleusercontent.com',
  discoveryDocs: ["https://script.googleapis.com/$discovery/rest?version=v1"],
  scope: 'https://www.googleapis.com/auth/spreadsheets'
}

export function callRemote(functionName, parameters) {
  const scriptId = "MRS76Uwc518XjzohfvxxU4LbiB0og-dIC"
                    
  return gapi.client.script.scripts.run({
    scriptId,
    resource: {
      function: functionName,
      parameters
    }
  }).then(function(resp) {
    var result = resp.result
    if (result.error && result.error.status) {
      console.error('Error calling API:')
      console.error(JSON.stringify(result, null, 2))
    } else if (result.error) {
      var error = result.error.details[0]
      console.error('Script error message: ' + error.errorMessage)

      if (error.scriptStackTraceElements) {
        console.error('Script error stacktrace:')
        for (var i = 0; i < error.scriptStackTraceElements.length; i++) {
          var trace = error.scriptStackTraceElements[i]
          console.error('\t' + trace.function + ':' + trace.lineNumber)
        }
      }
    } else {
      return result.response.result;
    }
  });
}

export const init = () => {
  return new Promise((resolve, reject) => {
    gapi.load('client:auth2', () => {
      gapi.client.init(initData)
        .then(() => {
          resolve(gapi.auth2.getAuthInstance().isSignedIn.get())
        }, e => {
          reject(e)
        })
    });
  })
}

export const signIn = () => {
  return gapi.auth2.getAuthInstance().signIn()
}

export const signOut = () => {
   return gapi.auth2.getAuthInstance().signOut()
}