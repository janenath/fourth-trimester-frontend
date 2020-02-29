import history from '../history'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'


export function loginUser(creds) {  
    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${creds.username}&password_digest=${creds.password}`
    }
    return dispatch => {
        dispatch(requestLogin(creds))
        return fetch('https://fourth-trimester-api.herokuapp.com/authenticate', config)
        .then(response => {
            return response.json().then(user => ({ user, response }))
        }).then(({ user, response }) => {
                if(!response.ok) {
                    dispatch(loginError(user.message))
                    return Promise.reject(user)
                } else {
                    localStorage.setItem('auth_token', user.auth_token)
                    dispatch(receiveLogin(user))
                }
            })
            .catch(err => console.log("Error: ", err))
            
    }
}

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    console.log('logging out')
    dispatch(requestLogout())
    localStorage.removeItem('auth_token')
    dispatch(receiveLogout())
  }
}


export function signupUser(creds) {
  let config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${creds.username}&password_digest=${creds.password}`
  }
  return dispatch => {
      dispatch(requestSignup(creds))
      return fetch('https://fourth-trimester-api.herokuapp.com/authenticate', config)
      .then(response =>
          response.json().then(user => ({ user, response }))
          ).then(({ user, response }) => {
              if(!response.ok) {
                  dispatch(loginError(user.message))
                  return Promise.reject(user)
              } else {
                  localStorage.setItem('auth_token', user.auth_token)
                  dispatch(receiveLogin(user))
              }
          })
          .catch(err => console.log("Error: ", err))
  }
}

function requestSignup(creds) {
return {
  type: SIGNUP_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds
}
}

function receiveSignup(user) {
return {
  type: SIGNUP_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token
}
}

function signupError(message) {
return {
  type: SIGNUP_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
}
}