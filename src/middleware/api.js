const axios = require ('axios')

export function callApi() {
    let token = localStorage.getItem('auth_token') || null
    let config = {}
    if(token) {
        config = {
            url: 'http://localhost:3000/articles',
            headers: { 'Authorization': `Bearer ${token}` }
        }
        } else {
            throw "No token saved!"
    }

    return(axios(config))
}


// function callApi() {
//     const { dispatch, isAuthenticated, errorMessage } = this.props
//     let token = localStorage.getItem('auth_token') || null
//     let config = {}
//     if(isAuthenticated) {
//         console.log(token)
//       if(token) {
//         config = {
//           headers: { 'Authorization': `Bearer ${token}` }
//         }
//       } else {
//         throw "No token saved!"
//       }
//     }
    
//     return fetch(BASE_URL, config)
//       .then(response =>
//         response.text()
//         .then(text => ({ text, response }))
//       ).then(({ text, response }) => {
//         if (!response.ok) {
//           return Promise.reject(text)
//         }
//         return text
//       }).catch(err => console.log(err))
//   }
  
//   export const CALL_API = Symbol('Call API')
  
//   export default store => next => action => {
    
//     export const callAPI = action[CALL_API]
    
//     // So the middleware doesn't get applied to every single action
//     if (typeof callAPI === 'undefined') {
//       return next(action)
//     }
    
//     let { endpoint, types, authenticated } = callAPI
    
//     const [ requestType, successType, errorType ] = types
    
//     // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
//     return callApi(endpoint, authenticated).then(
//       response =>
//         next({
//           response,
//           authenticated,
//           type: successType
//         }),
//       error => next({
//         error: error.message || 'There was an error.',
//         type: errorType
//       })
//     )
//   }