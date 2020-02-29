import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from '../actions/types';

export default function authReducer(state = {isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false, user: null}, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
                return Object.assign({}, state, {
                  isFetching: true,
                  isAuthenticated: false,
                  user: action.creds
                })
              case LOGIN_SUCCESS:
                return Object.assign({}, state, {
                  isFetching: false,
                  isAuthenticated: true,
                  errorMessage: ''
                })
              case LOGIN_FAILURE:
                return Object.assign({}, state, {
                  isFetching: false,
                  isAuthenticated: false,
                  errorMessage: action.message
                })
            case LOGOUT_REQUEST:
                return Object.assign({}, state, {
                    isFetching: true,
                    isAuthenticated: true,
                    user: action.creds
                })
            case LOGOUT_SUCCESS:
                return Object.assign({}, state, {
                  isFetching: true,
                  isAuthenticated: false
                })
            case LOGOUT_FAILURE:
                return Object.assign({}, state, {
                    isFetching: false,
                    isAuthenticated: true,
                    errorMessage: action.message
                })
            case SIGNUP_REQUEST:
                return Object.assign({}, state, {
                    isFetching: true,
                    isAuthenticated: false,
                    user: action.creds
                })
            case SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            })
            case SIGNUP_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
            default:
            return state
    }
}